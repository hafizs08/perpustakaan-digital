import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1, // You might need to adjust the user ID
      });

      console.log("Post created:", response.data);
      // Clear the input fields after successful submission
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Post:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <br />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          required
        ></textarea>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;