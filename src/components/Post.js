import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const { post } = props;
  const navigate = useNavigate();
  const getPostDetail = () => {
    const path = `/posts/${post.id}`;
    navigate(path);
  };
  return <button onClick={getPostDetail} className="postDetailBtn">{post.id}</button>;
};

export default Post;
