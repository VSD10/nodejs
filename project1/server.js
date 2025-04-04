const express=require('express');
const app=express();
const vsd=require('./views/vsd');

app.use('/vsd',vsd);
app.use('/',(req,res)=>
{
    res.send('Hello World');
    
})

app.listen(3000,()=>
{
    console.log('Server is running on port 3000');
})