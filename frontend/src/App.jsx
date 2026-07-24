import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ width: "80%", margin: "20px auto" }}>
        <PostForm />
        <PostList />
      </div>
    </>
  );
}

export default App;