import React from "react";
import { FcAddImage } from "react-icons/fc";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Vchat</span>
        <span className="title">Register </span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <FcAddImage size={32} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>you do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
