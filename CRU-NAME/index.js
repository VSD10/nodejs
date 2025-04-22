const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const connectDB = require('./LIB/db');
const { UserList, Usercreate, Userupdate } = require('./controllers/model.user');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app.get('/', UserList);
app.use('/users', routes);





app.listen(3000,()=>console.log("server started at port 3000"))
