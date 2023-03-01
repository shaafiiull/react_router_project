import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const [detail, setDetail] = useState({});
  const { friendId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <div>
      <h1>
        This is {detail.name} with id: {detail.id}
      </h1>
      <p>Address: {detail.address?.city}</p>
    </div>
  );
};

export default FriendDetail;
