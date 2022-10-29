const express = require("express")
const productRouter = express.Router();
const Product = require('../modles/Product');

productRouter.get("/new", async (req, res, next) => {
    res.render("new")
})
productRouter.get("/new/remove", async (req, res, next) => {
    res.render("remove")
})
productRouter.get("/new/edit", async (req, res, next) => {
    res.render("edit")
})
productRouter.post("/new/remove", async (req, res, next) => {
    const title = req.body.title;
    const num = req.body.category;
    let category = "a"
    if (num == 1) { category = "traning" }
    if (num == 2) { category = "Gifts and Accessories" }
    if (num == 3) { category = "Back to School" }
    await Product.remove({ "category": category, "title": title })
    return res.render("remove")
})

 
 
productRouter.post("/new", async (req, res, next) => {
     const title = req.body.title;
    const img = req.body.img;
    const price = req.body.price;
    const num = req.body.category;
    let category = "a"
    if (num == 1) {   category = "traning" }
    if (num == 2) {   category = "Gifts and Accessories" }
    if(num == 3){  category = "Back to School"}


     

 console.log(title,price ,img,category )
     const product = new Product({
        title: title,
        img: img,
         price: price,
         category:category,
    });
    await product.save();
    

    return res.status(201).render("new")
})
module.exports = productRouter