require("dotenv").config()
const express= require("express")
const path= require("path")
const routes= require("./routes");
const app= express()

app.use(function(req,res, next){
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", routes);


const port= process.env.PORT;
const server= app.listen(process.env.PORT, function() {
    console.log("Listening to PORT"+ server.address().port);
})



