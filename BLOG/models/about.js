const express = require('express');
const router = express.Router();
const path=require('path');

// Define a simple route for /blog
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','about.html'))
});
module.exports=router;