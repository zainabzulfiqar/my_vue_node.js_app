const mongoose=require('mongoose');

const PostsSchema=mongoose.Schema(
    {
        text:{
            type:String,
            required:true
        },
        //courseCode:Number,
        date:{
            type:Date,
            default:Date.now
        }
    }
);

module.exports=mongoose.model('posts',PostsSchema);