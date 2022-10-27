const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const app = express(); // init express app
const signup = require("./routes/signup")
const signin = require("./routes/signin")
const new_ = require("./routes/new")
const fc = require("./routes/fc");
 
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.json())
// app.use(cors())
app.use(signup)
app.use(signin)
app.use(new_)
app.use(fc)
 




const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/fc",{useNewUrlParser:true}
          );
         console.log("succsessfuly connected to mongodb");
         app.listen(4000, () => console.log("server listen on port 4000"));
    } catch (err) {
         console.log(err);
    }
};

start();