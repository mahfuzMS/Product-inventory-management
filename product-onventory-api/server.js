require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Product Inventory API is Running");
});

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
