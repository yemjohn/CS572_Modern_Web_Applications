const express= require("express");
const path= require("path");
const fs= require("fs")
require("dotenv").config();
const app= express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/public", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, "index.html"))
})
app.get("/public/bootsrap", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, "bootstrap.min.css"))
})
app.get("/public/custom", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, "custom.css"))
})

const port= process.env.PORT;
app.listen(port, ()=> {
    console.log("the app is listining port" +port);
})