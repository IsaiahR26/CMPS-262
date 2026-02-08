const express = require("express");
const app = express();

const PORT = 3000;

// Created homepage with a welcome message

app.get("/", (req, res) => {
    res.send("Welcome to My Express App");
});

// Displays information about the application

app.get("/about", (req,res) => {
    res.send("This is a simple Express application for learning purposes");
});

// Displays a contact method

app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Us</h1>

    <form method="GET" action="/contact-submit">
      <label>Name:</label><br>
      <input type="text" name="name" required><br><br>

      <label>Email:</label><br>
      <input type="email" name="email" required><br><br>

      <label>Other contact:</label><br>
      <input type="text" name="other"><br><br>

      <label>Message:</label><br>
      <input type="text" name="message" required> <br><br>

      <button type="submit">Send</button>
    </form>
  `);
});

// Recieves the form with a message

app.get("/contact-submit", (req, res) => {
  const { name, email, other, message } = req.query;

  res.send(`
    <h2>Form Received</h2>
    <p>Name: ${name || ""}</p>
    <p>Email: ${email || ""}</p>
    <p>Other: ${other || ""}</p>
    <p>Thank you, ${name}! We have received your message: ${message}</p>
  `);
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});


