import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <>
      <h2>Posts</h2>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      )}
    </>
  );
}

export default PostList;