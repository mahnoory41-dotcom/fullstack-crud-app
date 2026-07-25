import "./PostCard.css";
function PostCard({
  post,
  setEditingPost,
  deletePost,
}) {
  return (
    <div className="card" className="actions">
      <h3>{post.title}</h3>

      <p>{post.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        {post.status ? "Active" : "Inactive"}
      </p>

      <button className="btn edit"
        onClick={() => setEditingPost(post)}
      >
        Edit
      </button>

      <button
      className="btn delete"
        onClick={() => deletePost(post.id)}
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