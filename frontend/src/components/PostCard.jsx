import "./PostCard.css";
import { useAuth } from "../context/AuthContext";

function PostCard({
  post,
  setEditingPost,
  deletePost,
}) {

  const { user } = useAuth();

  return (
    <div className="card actions">

      <h3>{post.title}</h3>

      <p>{post.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        {post.status ? "Active" : "Inactive"}
      </p>

      {user && post.user_id === user.id && (
        <>
          <button
            className="btn edit"
            onClick={() => setEditingPost(post)}
          >
            Edit
          </button>

          <button
            className="btn delete"
            onClick={() => deletePost(post.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </>
      )}

    </div>
  );
}

export default PostCard;