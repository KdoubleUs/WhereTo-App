import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

function Submit() {
  const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #000;
  `;

  return (
    <div className="submissionForm">
      <span>Submit A Location</span>
      <form>
        <div className="nameSec">
          <label>UserName</label>
          <input type="text" id="name" placeholder="abc123@gmail.com" />
        </div>
        <div className="locationSec">
          <label>Location Name</label>
          <input
            type="text"
            id="name"
            placeholder="enter the name of the restaurant"
          />
        </div>
        <div className="categorySec">
          <label>Category</label>
          <input type="text" id="name" placeholder="restaurant/bar/etc" />
        </div>
        <div className="addressSec">
          <label>Address</label>
          <input
            type="text"
            id="name"
            placeholder="Address of the restaurant"
          />
        </div>
        <div className="about">
          <label>About the restaurant</label>
          <input type="text" id="name" placeholder="What is this restaurant?" />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default Submit;
