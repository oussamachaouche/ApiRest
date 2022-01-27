const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
//import route
const postRoute = require('./routes/post');
app.use('/posts', postRoute);
app.get('/',(req,res)=>{
    res.send("we are at home");
});

mongoose.connect(process.env.DB_CONNECTION,()=>
 console.log('connected to DB'));

app.listen(8000);