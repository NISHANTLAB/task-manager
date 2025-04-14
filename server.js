const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const swaggerSetup = require("./swagger");
const authMiddleware = require("./middleware/auth.middleware");
const errorMiddleware = require('./middleware/error.middleware');

dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

 swaggerSetup(app);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", authMiddleware, taskRoutes);

// // Error Middleware
 app.use(errorMiddleware);

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });