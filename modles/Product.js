const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    
    img: {
        type: String,
        require: true,
        
    },
    category: {
        type: String,
        require: true,
    },
  

});

const Product = mongoose.model("Products", productSchema);  
module.exports = Product;