import axios from 'axios';

const url='http://localhost:3000/api/posts/';

class PostService{
    //Get Posts
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                       // createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    //Create post
    static insertPost(text){
        return axios.post(url,{
            text,
        });

    }
    //delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
        
    }
    static updatePost(id,text){
        console.log('in postservice');
        console.log(`${url}${id}${'/'}${text}`);
        return axios.patch(`${url}${id}${'/'}${text}`);
    }

}
export default PostService;