import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import * as PostsAPI from "../../utilities/post-api";
export default function MyPostsPage({ user }) {
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(null);
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  useEffect(() => {
    async function getallPosts() {
      const posts = await PostsAPI.index();
      setPosts(posts);
    }
    getallPosts();
  }, []);
  async function deletePost(id) {
    alert(`delete ${id}`);
    await PostsAPI.deletePost(id);
  }
  async function update(id) {
    alert(`update ${id}`);
    await PostsAPI.update(id);
  }
  // Function to enter edit mode for a post
  function editPost(id) {
    setEditMode(id);
  }

  // Function to handle caption input change
  function handleCaptionChange(e, id) {
    // Find the post being edited
    const editedPost = posts.find((post) => post._id === id);
    console.log(editedPost);
    // Create a copy of the post with the updated caption
    const updatedPost = { ...editedPost, caption: e.target.value };
    // Update the posts array with the edited post
    const updatedPosts = posts.map((post) =>
      post._id === id ? updatedPost : post
    );
    setPosts(updatedPosts);
  }

  async function saveChanges(id) {
    // Find the post being edited
    const editedPost = posts.find((post) => post._id === id);
    console.log(editedPost); // Log the editedPost to check its contents
    // Call the API to update the post
    await PostsAPI.update(id, editedPost);
    // Exit edit mode
    setEditMode(null);
  }

  // Function to cancel edits when in edit mode
  function cancelEdit() {
    // Exit edit mode
    setEditMode(null);
  }

  return (
    <>
      <h1>Post Page</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            {editMode === post._id ? (
              // Edit mode
              <div>
                <input
                  type="text"
                  value={post.caption}
                  onChange={(e) => handleCaptionChange(e, post._id)}
                />
                {/* <button onClick={() => saveChanges(post._id)}>Save</button> */}
                <Button onClick={() => saveChanges(post._id)} variant="warning">Edit Post</Button>{' '}
                {/* <button onClick={() => cancelEdit()}>Cancel</button> */}
                <Button onClick={() => cancelEdit()} variant="secondary">Cancel</Button>{' '}
              </div>
            ) : (
              // View mode
              <div>
                <img
                  src={post.imageURL}
                  alt="Selected"
                  width="300"
                  height="300"
                />
                <p>{post.caption}</p>
                {user._id === post.user ? (
                  <div>
                    {" "}
                    <Button onClick={() => editPost(post._id)} variant="warning">Edit Post</Button>{' '}
                     
                    <Button variant="secondary" onClick={() => deletePost(post._id)} >Delete</Button>{' '}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
