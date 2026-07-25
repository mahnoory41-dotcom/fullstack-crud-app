import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import api from "./services/api";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/posts");

      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      const response = await api.post("/posts", postData);

      setPosts((prev) => [response.data.data, ...prev]);

      setMessage("✅ Post created successfully");

      return { success: true };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const response = await api.put(`/posts/${id}`, postData);

      setPosts((prev) =>
        prev.map((post) =>
          post.id === id ? response.data.data : post
        )
      );

      setEditingPost(null);

      setMessage("✅ Post updated successfully");

      return { success: true };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm("Delete this post?")) return;

    try {
      await api.delete(`/posts/${id}`);

      setPosts((prev) =>
        prev.filter((post) => post.id !== id)
      );

      setMessage("🗑️ Post deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
<div className="container">
        {message && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        <PostForm
          createPost={createPost}
          updatePost={updatePost}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />

        <hr />

        <PostList
          posts={posts}
          loading={loading}
          setEditingPost={setEditingPost}
          deletePost={deletePost}
        />
      </div>
    </>
  );
}

export default App;