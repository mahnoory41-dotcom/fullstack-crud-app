import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import api from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPost = async (postData) => {
    try {
      await api.post("/posts", postData);

      fetchPosts();

      return { success: true };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ width: "80%", margin: "20px auto" }}>
        <PostForm createPost={createPost} />

        <PostList posts={posts} />
      </div>
    </>
  );
}

export default App;