const db = require("../config/db");

exports.createUser = (username, hashedPassword, callback) => {
  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    callback
  );
};

exports.findUserByUsername = (username, callback) => {
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    callback
  );
};
