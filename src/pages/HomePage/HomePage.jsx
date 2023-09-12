import { useState, useEffect } from "react";
import * as PostsAPI from "../../utilities/post-api";


export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getallPosts() {
      const posts = await PostsAPI.index();
      setPosts(posts);
    }
    getallPosts();
  }, []);


  return (
    <main>
      {posts.map((post, index) => (
          <div key={index}>
            <img src={post.imageURL} alt="Selected" width="300" height="300" />
            <p>{post.caption}</p> 
          </div>
        ))}
    </main>
  );
}
