import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to Uppercase","success")
  };
  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText)
    props.alert("Converted to Lowercase","success")
  };
  const handleOnChange = (a) => {
    console.log("Changed");
    setText(a.target.value);
  };
  const handleClear = () => {
    setText("");
    props.alert("Text Cleared Successfully","success")
  };
  const [text, setText] = useState("Welcome to my Website");
 
  return (
    <>
     
        <div className="container">
          <h3 className="fw-light fst-italic">{props.heading}</h3>
          <div className="form-group mb-3">
            <textarea
              value={text}
              onChange={handleOnChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              style={{backgroundColor: props.mode==="light"?"#fff":"#212529" , color: props.mode==="light"?"#212529":"#fff" }}
            ></textarea>
          </div>
          <button onClick={handleUpClick} className="btn btn-primary">
            Convert to Uppercase
          </button>
          <button onClick={handleDownClick} className="btn btn-primary mx-2">
            Convert to Lowercase
          </button>
          <button onClick={handleClear} className="btn btn-primary mx-2">
            Clear text
          </button>
        </div>
        <div className="container my-3">
          <h3 className="fw-light fst-italic">Your Text contains :</h3>
          <p>
            {text.split(" ").length} Words and {text.length} Letters
          </p> <hr />
          <h2 className="fw-light fst-italic">Preview :</h2>
          <p>{text}</p> <hr />
        </div>
     
    </>
  );
}
