const { text } = require('body-parser');
const express=require('express');
//const mongodb=require('mongodb');
const posts=require('../../models/posts.js');
const router=express.Router();

//Get Posts
router.get('/',async (req,res)=>{
    //res.send('helloooooo');
    const Posts=await posts.find({});
    res.json(Posts);
});
//add post
router.post('/', async (req,res)=>{
    console.log("-----",req.body)
    const Post=new posts({
        //id:courses.length+1,
        text:req.body.text,
        //courseCode:req.body.courseCode
    });
    await Post.save()
    .then(data=>{
        res.json(data);
    });
    

});

//delete posts
router.delete('/:id',async (req,res)=>{
   const removedPost= await posts.remove({_id: req.params.id});
   res.send(removedPost);
});
router.patch('/:id/:text',async(req,res)=>{
    //console.log('put request submitted')
    // const index=await 
    console.log('im innn');
    
    console.log(req.params.text);
    const index=await posts.findByIdAndUpdate(req.params.id,{text:req.params.text});
    // posts.findByIdAndUpdate(req.params.id, { text: req.body.text }, 
    //     function (err, docs) { 
    //     if (err){ 
    //     console.log(err) 
    //     res.send(err);
    //     } 
    //     else{ 
    //     console.log("Updated User : ", docs); 
    //     res.send(docs);
    //     } 
    //     });
    console.log(index,"--index--");
    res.send(index);
    //find(p =>p._id === req.params.id);
    //index.text=req.params.text;

})
//router.put()
module.exports=router;