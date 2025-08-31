const express = require("express");
const cors = require("cors");
const sequelize = require("./src/db/db");
const userRoutes = require("./src/routes/userRoutes");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/users/", userRoutes);

const port = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => console.log("Server running on port 5000"));
});
