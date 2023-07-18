import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello how are you</p>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
      </div>
    </div>
  );
}

export default Message;
