import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Vchat</span>
      <div className="user">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        <span>Jiki</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
