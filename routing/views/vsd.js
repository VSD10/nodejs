const express=require('express');
const route=express.Router();
const app=express();
const path=require('path');
route.get('/',(req,res)=>
{
    res.status(700).send("vanakam da mapla malaysia la irundu")
   

})
module.exports =route;