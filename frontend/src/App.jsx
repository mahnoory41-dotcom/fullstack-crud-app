import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import api from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);
const [editingPost, setEditingPost] = useState(null);

const [loading, setLoading] = useState(false);

const [message, setMessage] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);

 const fetchPosts = async () => {

    setLoading(true);

    try{

        const response = await api.get("/posts");

        setPosts(response.data.data);

    }catch(error){

        console.log(error);

    }

    setLoading(false);

};

  const createPost = async (postData) => {
    try {
      await api.post("/posts", postData);

      fetchPosts();
      setMessage("Post created successfully.");

      return { success: true };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  };
const updatePost = async (id, postData) => {

    try{

        await api.put(`/posts/${id}`, postData);

        fetchPosts();

        setEditingPost(null);

        setMessage("Post updated successfully.");

        return { success:true };

    }catch(error){

        return{

            success:false,

            errors:error.response?.data?.errors || {}

        };

    }

};
const deletePost = async (id)=>{

    if(!window.confirm("Delete this post?")) return;

    try{

        await api.delete(`/posts/${id}`);

        fetchPosts();

        setMessage("Post deleted successfully.");

    }catch(error){

        alert("Delete failed");

    }

};
  return (
    <>
      <Navbar />

      <div style={{ width: "80%", margin: "20px auto" }}>
        {loading && <h3>Loading...</h3>}
        {message && (

<p style={{color:"green"}}>

{message}

</p>

)}
        <PostForm

createPost={createPost}

updatePost={updatePost}

editingPost={editingPost}

/>
<PostList

posts={posts}

setEditingPost={setEditingPost}

deletePost={deletePost}


/>
      </div>
    </>
  );
}

export default App;