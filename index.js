const express =require("express");
const {inputCleaner,inputValidator}=require("./middleware.js");
const app=express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.redirect("/form");
});

app.use("/form",express.static("public"));

app.post("/submit",inputCleaner,inputValidator,(req,res)=>{
    res.json({username:req.body.username,comment:req.body.comment});
});

app.listen(3000,()=>{
    console.log("Nice...");
});