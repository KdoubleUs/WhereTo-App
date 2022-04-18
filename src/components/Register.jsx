import React from "react";
import { useState, useEffect } from "react";
function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPasssword] = useState("");
  let handleChange = function () {};
  let handleSubmit = function () {
    event.preventDefault();
    await;
  };
  return (
    <div className="registrationBox">
      <div className="login">
        <h1>Login</h1>
        <form>
          <lable>Username</lable>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={userName}
          ></input>
          <lable>Password</lable>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
          ></input>
          <lable>Confirm Password</lable>
          <input></input>
          <lable>Email</lable>
          <input></input>
          <button>Create Account</button>
        </form>
      </div>
      <div className="register">
        <h1>Create an account</h1>
        <form>
          <lable>Username</lable>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={userName}
          ></input>
          <lable>Password</lable>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
          ></input>
          <lable>Confirm Password</lable>
          <input></input>
          <lable>Email</lable>
          <input></input>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
