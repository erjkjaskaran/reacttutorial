import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handlecleartext = () => {
    setText("");
  };

  const handlecopy = () => {
    let txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };

  const handleextraspace = () => {
    setText(text.split(/[ ]+/).join(" "));
    console.log(text.split(/[ ]+/).join(" "));
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div className="container">
      <h1>{props.text}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecleartext}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleextraspace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy Text
        </button>
      </div>
      <div className="container">
        <h1>{props.summaryheading}</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p align="justify">{text}</p>
      </div>
    </div>
  );
}
