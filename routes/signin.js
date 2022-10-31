const express = require("express")
const signinRouter = express.Router();
const User = require("../modles/Usre");

signinRouter.get("/signin", async (req, res) => {
    console.log("login")
   return res.render("signin")
})

signinRouter.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
  
    const existingUser = await User.findOne({ "email": email, "password": password })
 

     if (existingUser) {

        return res.status(201).render("Management")


    }
    return res.send("not faund")
 })
module.exports = signinRouter