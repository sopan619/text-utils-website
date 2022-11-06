import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let lowerCase = text.toUpperCase();
    setText(lowerCase);
  };
  const handleOnchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const handlelowClick = () => {
    setText(text.toLowerCase());
  };
  const handleCapClick = () => {
    setText(text.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()));
  };
  const handleClearClick = () => {
    setText("");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const copyTextArea = () => {
    navigator.clipboard.writeText(text);
  };

  let [text, setText] = useState("Type here...");
  return (
    <>
      <div className="container">
        <h1 className="text-muted fs-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#4b4c4ec2" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-danger mx-4" onClick={handlelowClick}>
          LOWERCASE
        </button>
        <button className="btn btn-warning" onClick={handleCapClick}>
          CAPITALIZE
        </button>
        <button className="btn btn-info mx-4" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-success my-2 " onClick={copyTextArea}>
          COPY TEXT
        </button>
        <button className="btn btn-dark mx-4" onClick={handleClearClick}>
          CLEAR TEXT
        </button>
      </div>

      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1 className=" my-4 fs-4">Summary of your text...</h1>
        <p className="font-monospace fs-5">
          Your sentence or paragraph contains
          <b>
            {" "}
            {
              text.split(/\s+/).filter((item) => {
                return item.length !== 0;
              }).length
            }{" "}
            words
          </b>{" "}
          and
          <b> {text.length} characters</b> in it.
        </p>
        <p className="font-bolder fs-5">
          {" "}
          This article is a<b>
            {" "}
            {Math.round(0.008 * text.split(" ").length)}{" "}
          </b>{" "}
          minutes read.
        </p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};
Textform.defaultProps = {
  heading: "Enter your heading here.",
};
