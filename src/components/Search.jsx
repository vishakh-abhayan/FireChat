import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        <div className="userInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
