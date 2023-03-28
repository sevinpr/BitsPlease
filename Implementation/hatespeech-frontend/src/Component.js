import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";

const api = axios.create({
  baseURL: "http://20.193.132.241:5000/",
});

const MyComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async () => {
    try {
      if (inputText !== "") {
        const response = await api.post("/api/input", { text: inputText });
        setResponseText(response.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (event.target.value === "") {
      document.body.style.backgroundColor = "white";
      setResponseText(null);
    }
  };

  useEffect(() => {
    if (responseText && responseText === "Hate Speech") {
      document.body.style.backgroundColor = "red";
    } else if (responseText && responseText === "Non-Hate Speech") {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [responseText]);

  return (
    <div className="main">
      <div className="d-inline-flex align-items-center" id="header">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img id="logo" src={logo} alt={logo} />
        <h2>BitsPlease</h2>
      </div>
      <div className="container">
        <h2 className="d-flex justify-content-center" id="HeaderText">
          Let's Prevent Spreading Hate Speech
        </h2>
        
        <div className="d-flex justify-content-center"  style={{ width: '160vw' }}>
          <div className="form-floating w-25 input-group rounded" >
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Text...."
              onChange={handleInputChange}
            />
            <label form="floatingInput">Type Here...</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      {responseText ? (
        <p id="marginAdder" className="d-flex justify-content-center">
          {responseText}
        </p>
      ) : null}
    </div>
  );
};

export default MyComponent;
