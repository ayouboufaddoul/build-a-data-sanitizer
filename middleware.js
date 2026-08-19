const express=require( "express");
const app =express();

app.use(express.json());

const inputCleaner=(req,res,next)=>{
    if(req.body.username)
        req.body.username=req.body.username.trim().toLowerCase();
    if(req.body.comment)
        req.body.comment=req.body.comment.trim().replace(/<[^>]*>?/gm,"");
    next();
};
const inputValidator=(req,res,next)=>{
    if(req.body.username.length >= 3)
        next(); 
    else{
        res.redirect("/form?error=Username must be at least 3 characters.");
    }
};

module.exports= {inputCleaner,inputValidator}