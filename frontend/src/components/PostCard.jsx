function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>

      <p>{post.description}</p>

      <p>
        Status:
        {post.status ? " Active" : " Inactive"}
      </p>

      <button>Edit</button>

      <button
        style={{
          marginLeft: "10px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default PostCard;