import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>All posts: {posts.length}</h1>

      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
