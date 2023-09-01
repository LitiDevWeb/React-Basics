import "./App.css";
import Nav from "./Nav";
import Promo from "./Promo";
import Intro1 from "./Intro";
import Footer from "./Footer";
import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import ChildDate from "./ChildDate";
import InputComponent from "./Hooks";
import RegisterForm from "./Hook2";
import TextInputWithFocusButton from "./Hook3";
import Word from "./Word";
import React, { useState } from "react";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
//Image -> 1.by import or 2. src={require("./images/BurgerPic.jpg")} or 3.Extern by const randomImage
import Image from "./assets/BurgerPic.jpg";
//Video ->
import ReactPlayer from "react-player";

function App() {
  const [word, setWord] = useState("Eat");
  const date = new Date();

  function handleClick() {
    setWord("Drink");
  }

  const randomImageURL =
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80";
  const vidUrl =
    "https://www.youtube.com/watch?v=4RCNZM1Jxlk&ab_channel=WinnersTeam";
  return (
    <>
      <div className="App">
        <nav className="nav">
          <Link to="/" className="nav-item">
            Homepage
          </Link>
          <br></br>
          <Link to="/about-me" className="nav-item">
            About Me
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
        </Routes>
      </div>
      <ChildDate message={date.toLocaleTimeString()} />
      <div>
        <br></br>
        <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
        <br></br>
        <img src={Image} height={200} alt="picture"></img>
        <Word message={word + " at Little Lemon Restaurant"} />
        <button onClick={handleClick}>Change the first word</button>
      </div>
      <img src={require("./assets/meal3.jpeg")} height={200}></img>
      <br />
      <InputComponent />
      <br></br>
      <RegisterForm />
      <br></br>
      <TextInputWithFocusButton />
      <br></br>
      <img src={randomImageURL} height={200} alt="UnsplashPicture"></img>
      <Nav />;
      <Promo /> ;
      <Intro1 />;
      <Btn />;
      <ModeToggler />;
      <Footer /> ;
    </>
  );
}

export default App;
