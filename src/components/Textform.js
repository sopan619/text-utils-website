import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText("Uppercase button was clicked");
  };
  const handleOnchange = () => {
    console.log("Onchange");
  };

  let [text, setText] = useState("Enter Your Text Here...");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Click for Uppercase
      </button>
    </div>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};
Textform.defaultProps = {
  heading: "Enter your heading here.",
};
