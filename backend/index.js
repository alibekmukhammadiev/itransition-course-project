const express = require("express");
const cors = require("cors");
const sequelize = require("./src/db/db");
const authMiddleware = require("./src/middleware/authMiddleware");

const userRoutes = require("./src/routes/userRoutes");
const inventoryRoutes = require("./src/routes/inventoryRoutes");

const app = express();

app.use(
  cors({
    origin: "https://itransition-final-course-project.netlify.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// PUBLIC ROUTES (no auth required)
app.use("/api/users", userRoutes);

// PROTECTED ROUTES (requires JWT)
app.use("/api/inventories", authMiddleware, inventoryRoutes);

const port = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
