const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({message: "EatUp Delivery API is Running"});
});

app.get("/api/menu", (req, res) => {
    res.json([
        { id: 1, item: "Cheeseburger", price: 9.99 },
        { id: 2, item: "Chicken Bowl", price: 9.99 },
        { id: 3, item: "Veggie Wrap", price: 7.99 }
    ]);
});

app.listen(PORT, () => {
    console.log (`Server Running on http://localhost:${PORT}`);
});