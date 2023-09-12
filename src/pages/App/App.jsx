import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "../../index.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewPostPage/NewPostPage";
import MyPostsPage from "../MyPostsPage/MyPostsPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage"
import * as PostsAPI from "../../utilities/post-api";
export default function App() {
  const [user, setUser] = useState(getUser());
  

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route
              path="/myposts"
              element={<MyPostsPage user={user}/>}
            />
            <Route path="/"element={<HomePage/>}/>
          </Routes>
        </>
      ) : (
        <>
          <AuthPage setUser={setUser} />
          <HomePage/>
        </>
      )}
     
    </main>
  );
}
