import express from "express";
const app=express();

const port=8081;

app.use("/",(req ,res)=>{
    res.send("<h1>utsav</h1>");
    // res.json({mesage:"hello from express"});
   
})

app.listen(port, () => {console.log(`stared server on  https://localhost:${port}`)});