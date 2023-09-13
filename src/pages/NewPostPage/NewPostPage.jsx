import React, { useState } from "react";
import * as PostsAPI from "../../utilities/post-api";
import Form from 'react-bootstrap/Form';

export default function NewPostPage() {
  const [imageURL, setimageURL] = useState("");
  const [caption, setCaption] = useState("");
  const [post, setPost] = useState(null); // Store the posts locally

  // Function to submit the new post
  async function handleSubmit(evt) {
    evt.preventDefault();

    // Add the new post to the local posts array
    try {
      const response = await PostsAPI.createPost({
        imageURL: imageURL,
        caption: caption,
      });
      setimageURL("");
      setCaption("");
      setPost(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>New Post</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text"
        placeholder="Paste image URL here..."
        value={imageURL}
        onChange={(evt) => setimageURL(evt.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add Caption</Form.Label>
        <Form.Control as="textarea" rows={3}  placeholder="Write a caption..."
        value={caption}
        onChange={(evt) => setCaption(evt.target.value)}/>
      </Form.Group>
    </Form>

      {/* Submit Button */}
      <button onClick={handleSubmit}>Upload Post</button>
      {post ? (
        <div>
          <img src={post.imageURL} /> <p>{post.caption}</p>

        </div>
      ) : (
        ""
      )}

    </div>
  );
}
