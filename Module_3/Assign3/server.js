const express = require("express");
const app = express();

const PORT = 3000;

// Created homepage with a welcome message

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// Displays information about the application

app.get("/about", (req,res) => {
    res.send("This application is build with express.js");
});



app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});


