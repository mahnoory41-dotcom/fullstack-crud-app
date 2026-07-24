import { useState } from "react";

function PostForm({ createPost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const result = await createPost({
      title,
      description,
      status,
    });

    if (result.success) {
      setTitle("");
      setDescription("");
      setStatus(true);
    } else {
      setErrors(result.errors);
    }
  };

  return (
    <>
      <h2>Add Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        {errors.title && (
          <p style={{ color: "red" }}>{errors.title[0]}</p>
        )}

        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        {errors.description && (
          <p style={{ color: "red" }}>{errors.description[0]}</p>
        )}

        <br />

        <label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />

          Active
        </label>

        <br />
        <br />

        <button type="submit">
          Save Post
        </button>
      </form>

      <hr />
    </>
  );
}

export default PostForm;