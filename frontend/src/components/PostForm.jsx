import { useState, useEffect } from "react";
import "./PostForm.css";
function PostForm({
  createPost,
  updatePost,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setDescription(editingPost.description);
      setStatus(Boolean(editingPost.status));
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
    setErrors({});

    let result;

    if (editingPost) {
      result = await updatePost(editingPost.id, {
        title,
        description,
        status,
      });
    } else {
      result = await createPost({
        title,
        description,
        status,
      });
    }

    if (result.success) {
      setTitle("");
      setDescription("");
      setStatus(true);

      setEditingPost(null);
    } else {
      setErrors(result.errors);
    }
    setLoading(false);
  };

  return (
   <div className="form-card">
      <h2 className="form-title">
        {editingPost ? "Edit Post" : "Add Post"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
        className="form-control"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        {errors.title && (
          <p style={{ color: "red" }}>
            {errors.title[0]}
          </p>
        )}

        <br />

        <textarea
        className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br />

        {errors.description && (
          <p style={{ color: "red" }}>
            {errors.description[0]}
          </p>
        )}

        <br />

        
          <div className="checkbox">
          <input
            type="checkbox"
            checked={status}
            onChange={(e) =>
              setStatus(e.target.checked)
            }
          />
<label htmlFor="status">          Active
        </label>
          </div>
        <br />
        <br />

        <button
    type="submit"
    disabled={loading}
    className="btn btn-primary"
>
    {loading
        ? "Saving..."
        : editingPost
        ? "Update Post"
        : "Save Post"}
</button>

        {editingPost && (
          <button className="btn btn-secondary"
            type="button"
            style={{
              marginLeft: "10px",
            }}
            onClick={() => {
              setEditingPost(null);

              setTitle("");
              setDescription("");
              setStatus(true);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />
   </div>
  );
}

export default PostForm;