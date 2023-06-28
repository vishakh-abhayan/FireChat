import React from "react";
import { FcAddImage } from "react-icons/fc";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Vchat</span>
        <span className="title">Login </span>
        <form action="">
          <input type="email" placeholder="email" autoComplete="off" />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button>Sign in</button>
        </form>
        <p>you don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
