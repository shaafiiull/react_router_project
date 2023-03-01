import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h1>This is post {postId}</h1>
      <p>Title: {post.title}</p>
    </div>
  );
};

export default PostDetail;
