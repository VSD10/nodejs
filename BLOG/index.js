const express = require('express');
const app = express();
const blog = require('./models/blog.js');
const about = require('./models/about.js');
const contact = require('./models/contact.js');
const path=require('path')
app.use('/blog', blog);
app.use('/about', about);
app.use('/contact', contact);
app.use('/',(req,res)=>
    {
        res.status(404).sendFile(path.join(__dirname,'views','404.html'))

    })

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/blog');
});
