const posts =[]
let lastActivityTime = null;


function updateLastUserActivityTime(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            lastActivityTime = new Date()
            resolve(lastActivityTime)
        },1000)
    })

}

function createPost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve(post)
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const deletedPost = posts.pop();
                resolve(deletedPost)
            }else{
                reject("Error")
            }
        },1000)
    })
}

Promise.all([createPost({title:"POST1"}), updateLastUserActivityTime()])
.then(([createdPost, updatedTime]) => {
    console.log('Post:', createdPost.title);
    console.log('Last Activity Time:', updatedTime);
    return deletePost();
})
.then((deletedPost) => {
    if (deletedPost) {
      console.log(`Deleted Post: ${deletedPost.title}`);
    } else {
      console.log('No posts to delete.');
    }
    console.log('Remaining Posts:', posts);
  });
