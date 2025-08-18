const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./src/db/db");

app.use(express.json());

app.use(cors());

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected to PostgreSQL at:", res.rows[0].now);
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

testConnection();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port} port...`);
});
