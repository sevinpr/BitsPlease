import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Button, TextField } from "@material-ui/core";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // replace with your base URL
});

const MyComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async () => {
    try {
      if (inputText != "") {
        const response = await api.post("/api/input", { text: inputText });
        setResponseText(response.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (event.target.value == "") {
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
    <div>
      <div className="d-inline-flex align-items-center">
        <img id="logo" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
        <h2>BitsPlease</h2>
      </div>
      <h2 className="d-flex justify-content-center">
        Let's Prevent Spreading Hate Speech
      </h2>
      <div class="d-flex justify-content-center">
        <div class="form-floating w-25 input-group rounded">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Enter Comment...."
            onChange={handleInputChange}
          />
          <label for="floatingInput">Comment...</label>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {responseText ? (
        <p id="marginAdder" class="d-flex justify-content-center">
          {responseText}
        </p>
      ) : null}
    </div>
  );
};

export default MyComponent;
