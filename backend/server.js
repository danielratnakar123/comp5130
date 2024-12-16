require('dotenv').config();  // Load environment variables

const express = require('express');
const connectDB = require('./config/db');  // Corrected import path

connectDB();  // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 4000;  // Set the port to 4000 or use PORT from .env

app.use(express.json());  // Middleware to parse JSON bodies

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`HTTP Server running on http://localhost:${PORT}`);
});
