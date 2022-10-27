const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    
    imageURL: {
        type: String,
        require:true
        
    },
    price: {
        type: Number,
        require: true,
        min:0
    }

})

const Product = mongoose.model("Products", productSchema);  
module.exports = Product;