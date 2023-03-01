import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Friend = (props) => {
  const { username, id } = props.friend;
  const navigate = useNavigate();
  const showFriend = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div className="friendsContainer">
      <Link to={"/friend/" + id}>show detail of {username}</Link>
      <button onClick={showFriend} className="showFriendDetailBtn">
        Username: {username},,,, User Id: {id}
      </button>
    </div>
  );
};

export default Friend;
