
const express=require('express');
const cors=require('cors');
const app=express();

const bodyParser=require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(cors());
const mongoose=require('mongoose');

//Import Routes
const postsRoutes=require('./routes/api/posts.js');
app.use('/api/posts',postsRoutes);

mongoose.connect(
    "mongodb://127.0.0.1:27017/Posts",
    {useNewUrlParser:true},
    ()=>console.log('connected to Database....')
);

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));