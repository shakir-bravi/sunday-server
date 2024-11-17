import express from "express"
import { log } from "util";

const app  =express()


app.get("/",(req,res)=>{
    console.log(req.url);


    res.send(`<h>Hello World !!</h>`)
    
})


app.listen(2000,()=>{
console.log("=> App is listenoiign http://localhost:2000")
})