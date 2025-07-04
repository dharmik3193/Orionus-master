const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Import environment variables
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request body
const Inquiry = require("./models/Inquiry"); // Import the Inquiry model

const mongoose = require("mongoose");

// Replace with your actual MongoDB connection string
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/inquiries";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));


  
// Setup Nodemailer Transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail service
  auth: {
    user: process.env.EMAIL,  // Your email address (from .env)
    pass: process.env.PASSWORD, // Your app password (from .env)
  },
});

app.post("/send-inquiry", async (req, res) => {
  const { fullName, email, product, query } = req.body;

  try {
    // Save inquiry to MongoDB
    const newInquiry = new Inquiry({ fullName, email, product, query });
    await newInquiry.save();

    // Email setup
    const mailOptions = {
      from: process.env.EMAIL, // Send from your email
      to: "info@exportorionus.com", // The email address where you want to receive the inquiry
      subject: "New Product Inquiry", // Email subject
      text: `You have received a new inquiry:\n\nFull Name: ${fullName}\nEmail: ${email}\nProduct: ${product}\nQuery: ${query}`, // Email body content
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    console.error("Error storing inquiry:", error);
    res.status(500).json({ message: "Error processing inquiry" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});