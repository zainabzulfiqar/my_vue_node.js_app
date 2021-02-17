<template>
<div class="container">
  <h1>Latest Posts</h1>
  <!-- cREATE POST HERE -->
  <div class="create-post">
    <label for="create-post"><b><u>Say Something:</u></b></label>
    <input type="text" style="font-style:italic font-size:x-small" id="create-post" placeholder="your thoughts...." v-model="post.text">
    <button @click="createPost()">Add Post</button>

  </div>
  <hr>
  <p class='error' v-if="error">{{error}}</p>
  <div class="post-container">
    <div class="post"
     v-for="(post,index) in posts"
     v-bind:item="post"
     v-bind:index="index"
     v-bind:key="post._id"
    
     
     @dblclick="deletePost(post._id)"


     >
     <p>{{post.date}}</p>
     <p class="text">{{post.text}}</p>
      <button style="font-size:x-small" @click="editClick(post._id,)">Edit/update</button>

    
     </div>



  </div>
</div>
 
</template>

<script>
import PostService from '../PostServices';
export default {
  name: 'PostComponent',
  data(){
    return{
      posts:[],
      error:'',
      post:{
        text:'',
        date:'12/12/2020'
      }
    }
  },
  async created(){
    try{
      this.posts=await PostService.getPosts();

    }catch(err){
      this.error=err;
    }
  },
  methods:{
    async createPost(){
      await PostService.insertPost(this.post.text);
      this.posts=await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts=await PostService.getPosts();
    },
    async editClick(id,text){
      console.log(id,text);

      //this.post.text='';
     await PostService.updatePost(id,this.post.text);
      this.posts=await PostService.getPosts();

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 400px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #5bff84;
  background-color: #c1ffc6;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #c6ffb8;
  padding:  5px 5px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 0;
}
</style>