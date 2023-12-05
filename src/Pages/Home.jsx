import React from "react";
import video from "../images/planet-71428-Original--unscreen.gif";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <img src={video}></img>
      <h1>
        Cricket,Social Media & <br></br>The Power of Decentraliztion
      </h1>
      <p>GET STARTED</p>
      <div className="home_container_button">
        <Link to="/toss">
          <button className="home_container_button_first">Create Game</button>
        </Link>
        <button className="home_container_button_second">Join Game</button>
      </div>
    </div>
  );
};

export default Home;
