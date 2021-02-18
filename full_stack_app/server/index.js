
const express=require('express');
const cors=require('cors');

const app=express();
const bodyParser=require('body-parser');
const config = require('../config.js');

//Middleware
app.use(bodyParser.json());
app.use(cors());
const mongoose=require('mongoose');

//Import Routes
const postsRoutes=require('./routes/api/posts.js');
app.use('/api/posts',postsRoutes);
const conn=config.DB_Connection;
console.log(conn);
mongoose.connect(
    conn,
   
    {useNewUrlParser:true},
    ()=>console.log('connected to Database....')
);
console.log( conn);

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));