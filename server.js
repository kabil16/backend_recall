const express = require("express");
const app = express();
const port =5000;

app.get("/",(req,res)=>{
    res.send("hello world");
});
app.get("/user",(req,res)=>{
    res.send("no users add")
});
app.get("/add",(req,res)=>{
    res.send("<h1>kabil<h1>")
});
// send html file
app.use("/html",express.static('style'));
app.get("/html",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html")
});
// use image 
app.use("/img",express.static('img'));
app.get("/imgg",(req,res)=>{
    res.send("<img src='./img/robo.jfif'>")
})

app.listen(port,()=>{
    console.log("server has been started");
})
