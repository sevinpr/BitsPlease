import "./App.css";
import "./about.css";
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/", 
});
  

function Home() {
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
      <div>
        <nav>
          <div className="d-inline-flex align-items-center">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img id="logo" src={logo} alt={logo} />
            <h2>HateSweeper</h2>
          </div>
        </nav>
        <div className="information">
          <h2 className="d-flex justify-content-center" id="HeaderText">
          Let's Prevent Spreading Hate Speech
        </h2>
        <div className="d-flex justify-content-center">
          <div className="form-floating w-25 input-group rounded">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Text...."
              onChange={handleInputChange}
            />
            <label form="floatingInput">Type Here...</label>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
          </div>
        </div>
        {responseText ? (
          <p id="marginAdder" className="d-flex justify-content-center">
            {responseText}
          </p>
        ) : null}
  
        {<footer>
          <Link to="/about"><button style={{color: 'white'}}>About Us</button></Link>
        </footer>}
      </div>
    );
}

function About() {
  return (
    <div className="About">
        <nav>
          <div className="d-inline-flex align-items-center">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img id="logo" src={logo} alt={logo} />
            <h2>HateSweeper</h2>
          </div>
        </nav>

      <div className="information">
      <h1> About </h1>
      <div className="content">
        <p className="topic">Hate Sweeper</p>
        <p>
          Hate Sweeper is platform for a better social media surfing experience.
          With this platform, we hope to give you a welcoming and engaging
          social networking experience.
        </p>
        <br />
        <p className="topic">Why Hate Sweeper ?</p>
        <p>
          Hate Sweeper is a website that specializes in detecting Sinhala and
          Romanized Sinhala hate speech. This powerful program uses advanced
          algorithms to analyze text and identify harmful content, even when it
          is disguised with emojis or other hidden emotional cues. With its
          intuitive interface and state-of-the-art technology, Hate Sweeper is
          an invaluable tool for anyone who wants to keep their online community
          safe from hate speech and other forms of harmful content. Whether you
          are a social media manager, a content creator, or simply a concerned
          citizen, Hate Sweeper can help you identify and address hate speech
          quickly and effectively.
        </p>
        <br />
        <p className="topic">How the program works :</p>
        <p>
          Hate Sweeper is a sophisticated program that uses natural language
          processing (NLP) algorithms to analyze text for potential hate speech.
          It can detect Sinhala and Romanized Sinhala hate speech, even when it
          is disguised with emojis or other hidden emotional cues. This is
          particularly important given the prevalence of hate speech online,
          which can contribute to the spread of harmful stereotypes and
          perpetuate discrimination and exclusion.
        </p>
        <br />
        <p>
          The program works by analyzing the language used in the text and
          comparing it to a database of known hate speech phrases and keywords.
          It also takes into account the context of the text and the specific
          emotional cues that may be present, such as the use of certain emojis
          or punctuation. The result is a powerful tool that can identify
          potential hate speech with a high degree of accuracy.
        </p>
        <br />
        <p>
          One of the unique features of Hate Sweeper is its ability to detect
          hidden emotional cues. For example, someone may use a seemingly
          innocent emoji, such as a smiley face, to mask a hateful message.
          However, Hate Sweeper can recognize the emotional tone of the message
          and identify the underlying hate speech.
        </p>
        <br />
        <p>
          Overall, Hate Sweeper is an important tool for anyone who wants to
          promote a safe and inclusive online community. It can help individuals
          and organizations quickly identify and address hate speech, preventing
          it from spreading and creating harm.
        </p>
        <br />
        <p className="topic">How to use?</p>
        <p>
          If you are unsure if a contest contains hate speech or not, you can
          easily copy, paste, or type it to check it on your own. With the help
          of this technology, social media users will be warned when they post
          or leave a comment that contains hate speech or other offensive
          sentiments.
        </p>
        <br />
        <p>
          So why wait? Try Hate Sweeper today and experience the peace of mind
          that comes with knowing your online community is safe and inclusive.
        </p>
        <br />
        <p className="topic">Developers :</p>
        <p>1. Sevin Perera - 20211312</p>
        <p>2. Arkam Ahamed - 20200289 </p>
        <p>3. Rizan Abubakr - 20210325 </p>
        <p>4. Hasikala Hettiarachchi - 20210400 </p>
        <p>5. Aakif Ahmed - 20210088</p>
      </div>
      </div>
      {<footer>
          <Link to="/"><button style={{color: 'white'}}>Home</button></Link>
          <button id="back-to-top-btn" onclick="scrollToTop()">Back to Top</button>
        </footer>}

    </div>
    
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

