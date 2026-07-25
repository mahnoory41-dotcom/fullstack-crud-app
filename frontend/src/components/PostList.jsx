import PostCard from "./PostCard";

function PostList({

posts,

setEditingPost,

deletePost

}){

return(

<>

{

posts.map((post)=>(

<PostCard

key={post.id}

post={post}

setEditingPost={setEditingPost}

deletePost={deletePost}

/>

))

}

</>

);

}

export default PostList;