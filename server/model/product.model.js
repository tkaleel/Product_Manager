const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [5, "{PATH} must be at least 5 characters"]
    }
}, {timestamps: true})

// make the product schema and export
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;