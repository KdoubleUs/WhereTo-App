import React from "react";
import GoogleLogin from "react-google-login";
import { signInWithGoogle } from "../../Firebase";
function Authenticate() {
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="LoginContainer">
      <div className="loginBox">
        <h1>Login To Your Account</h1>
        <img
          src={localStorage.getItem("loginPhoto")}
          referrerpolicy="no-referrer"
          className="loginImg"
        />
        <p>Logged in as:{localStorage.getItem("name")}</p>
        <p>Currently used Email:{localStorage.getItem("email")}</p>
        <button
          type="submit"
          onClick={signInWithGoogle}
          className="login-with-google-btn "
        >
          Login in with Google
        </button>
        <button className="login-with-google-btn" onClick={clearStorage}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Authenticate;
