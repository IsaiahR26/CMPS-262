const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({message: "EatUp Delivery API is Running"});
});

app.get("/api/menu", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu ORDER BY id;");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result.rows, null, 2)); // <- pretty print
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
    console.log (`Server Running on http://localhost:${PORT}`);
});