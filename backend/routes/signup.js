const express = require("express")
const signupRouter = express.Router();
const User = require("../modles/Usre");

signupRouter.post("/signup", async (req, res) => {
    console.log(req.body.email)
    if (!req.body)
        {
            return res.status(400).send("no valid")
        }
    const email = req.body.email
    const password = req.body.password
    console.log(email,password,"kkkkkkkkkkkkkkkkkk")
    if (!email || !password)
    {

        // return res.status(201).send(user).redirect("http://127.0.0.1:5555/fronted/store.html")
        return res.send("email or password not valid")
    }
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser)
        {

            return res.send("email existing in db try anthur email ")

        }
        const user = new User({
            email: email,
            password: password
        });
        await user.save(); 
        return res.status(201).redirect('http://127.0.0.1:5555/fronted/Management.html')

        return res.status(201).send(user) 

    } catch (err) {
      return  res.status(500).send(err)
    }
 })

module.exports = signupRouter