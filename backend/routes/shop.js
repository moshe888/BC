
const express = require("express")
const shopRouter = express.Router();
 const Product = require("../modles/Product");


 
shopRouter.get('/', async(req, res, next) => {
    const products = Product.find();
     console.log(products);
    res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
})
module.exports = shopRouter