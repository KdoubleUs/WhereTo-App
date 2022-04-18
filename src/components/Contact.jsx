import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="contactPage">
      <span>
        <h1>Contact Us</h1>
      </span>
      <form className="contactForm">
        <label>Name: </label>
        <input type="text" placeholder="name" id="name"></input>
        <label>Email</label>
        <input type="email" placeholder="email" id="email"></input>

        <label>Comments: </label>
        <textarea className="commentBox"></textarea>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
