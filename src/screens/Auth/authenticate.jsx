import React from "react";
import GoogleLogin from "react-google-login";
import { signInWithGoogle } from "../../Firebase";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Authenticate() {
  const [login, setLogin] = useState(false);
  const [disable, setDisable] = useState(false);
  const checkLocalStorage = () => {
    const getItem = localStorage.getItem("email");
    if (getItem == null) {
      console.log(`nothing in the storage`);
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  // checkLocalStorage();
  // useEffect(() => {
  //   if (localStorage.length == 0) {
  //     console.log(`noting in storage`);
  //     setDisable(true);
  //   } else {
  //     setDisable(false);
  //   }
  // }, []);

  const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: 1.3em 1.3em;
    margin: 5px;
  `;

  const clearStorage = () => {
    const lookStorage = localStorage.getItem("email");
    if (lookStorage == null) {
      setDisable(true);
      console.log(`empty storage`);
    } else {
      setDisable(false);
    }
    // localStorage.clear();
    // window.location.reload();
  };
  useEffect(() => {
    clearStorage();
  }, []);
  const signOut = () => {
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
        <p>
          <b>Logged in as:</b>
          {localStorage.getItem("name")}
        </p>
        <p>
          <b>Currently used Email:</b>
          {localStorage.getItem("email")}
        </p>
        <Button
          type="submit"
          onClick={signInWithGoogle}
          className="login-with-google-btn"
          whileHover={{ scale: 1.05, backgroundColor: "#f08080" }}
          whileTap={{
            scale: 0.95,
            border: "none",
            backgroundColor: "lightblue",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Login with Google
        </Button>

        <Button
          className="login-with-google-btn"
          disabled={disable}
          onClick={signOut}
          whileHover={{ scale: 1.05, backgroundColor: "#f08080" }}
          whileTap={{
            scale: 0.95,
            border: "none",
            backgroundColor: "green",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Authenticate;
