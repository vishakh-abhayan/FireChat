import React from "react";

function Message() {
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
