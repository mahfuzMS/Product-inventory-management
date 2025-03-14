const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
        description: String,
        category: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
