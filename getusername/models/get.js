const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();

router.use('/',(req,res)=>
{
    res.render('index')
    const name=req.params;
    console.log(name);
})
