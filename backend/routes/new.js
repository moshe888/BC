const express = require("express")
const productRouter = express.Router();
const Product = require('../modles/Product');
 
productRouter.post("/new",async (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageURL;
    const price = req.body.price;
 
     const product = new Product({
        title: title,
        imageUrl: imageUrl,
        price:price
    });
    Product.save();

    res.redirect('/');
})
module.exports = productRouter