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
    // if (email == "1234" && password == "1234")
    // {
    //     return res.status(201).redirect("http://127.0.0.1:5555/fronted/store.html")
    // }
    const existingUser = await User.findOne({ "email": email, "password": password })

    const findall = await User.find()

    console.log(findall,"kkkkkkkkkkkkk",existingUser,email,password)


     if (existingUser) {

        return res.status(201).render("Management")


    }
    return res.send("not faund")
 })
module.exports = signinRouter