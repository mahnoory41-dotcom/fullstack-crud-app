function PostForm() {
  return (
    <>
      <h2>Add Post</h2>

      <form>
        <input
          type="text"
          placeholder="Enter title"
        />

        <br />
        <br />

        <textarea
          placeholder="Description"
        ></textarea>

        <br />
        <br />

        <label>
          <input type="checkbox" />
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