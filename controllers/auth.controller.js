const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    userModel.createUser(username, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: err.message ,status:500,Success:false});
      res.status(201).json({ message: "User registered",status:201,Success:true });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  userModel.findUserByUsername(username, (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: "Invalid username" ,status:401,Success:false});
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" ,status:401,Success:false });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token ,status:201,Success:true});
  });
};
