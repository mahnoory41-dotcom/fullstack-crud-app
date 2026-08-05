import PostCard from "./PostCard";

function PostList({
  posts,
  loading,
  setEditingPost,
  deletePost,
}) {
  if (loading) {
    
    return <h2>Loading...</h2>;
  }

  if (posts.length === 0) {
    return <h2>No Posts Found</h2>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          setEditingPost={setEditingPost}
          deletePost={deletePost}
        />
      ))}
    </>
  );
}

export default PostList;