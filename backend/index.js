const express = require("express");
const cors = require("cors");
const sequelize = require("./src/db/db");

// Authentication middleware
const authMiddleware = require("./src/middleware/authMiddleware");

// Routes
const userRoutes = require("./src/routes/userRoutes");
const inventoryRoutes = require("./src/routes/inventoryRoutes");

const app = express();

app.use(express.json());

app.use(authMiddleware);

app.use(cors());

app.use("/api/users/", userRoutes);

app.use("/api/inventories", inventoryRoutes);

const port = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => console.log("Server running on port 5000"));
});
