import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <span>
        <h1>Contact Us</h1>
      </span>
      <form>
        <label>Name: </label>
        <input type="text" placeholder="name" id="name"></input>
        <label>Email</label>
        <input type="email" placeholder="email" id="email"></input>

        <label>Comments: </label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
