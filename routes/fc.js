
const express = require("express")
const fc = express.Router();
const Product = require("../modles/Product");
 
 
fc.get('/home', async(req, res, next) => {
       res.render("home");
})
fc.get('/about', async(req, res, next) => {
    res.render("about");
 })



 
fc.get('/', async(req, res, next) => {
    const products = await Product.find();
       res.render("store1" , {   prods: products });//לוקחים קובץ ejs ומפעילים אותו ושולחים את המשתנים שנעבוד איתם 
    })
    module.exports = fc