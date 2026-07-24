function PostCard() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginTop: "15px",
      }}
    >
      <h3>Sample Post</h3>

      <p>This is sample description.</p>

      <p>Status : Active</p>

      <button>Edit</button>

      <button style={{ marginLeft: "10px" }}>Delete</button>
    </div>
  );
}

export default PostCard;