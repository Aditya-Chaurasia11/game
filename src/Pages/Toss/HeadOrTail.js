import React, { useState, useEffect } from "react";
import "./headortail.css";
import coin from "../../images/coin-tail-removebg-preview.png";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const HeadOrTail = () => {
  //   const [select, useSelect] = useState(false);
  const { width, height } = useWindowSize();

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [toss, setToss] = useState(false);
  const [name, setName] = useState("head");
  const [choose, setChoose] = useState(false);
  const [win, setWin] = useState("you won the toss");
  const [wait, setWait] = useState(false);

  const handleClick = (choice, e) => {
    e.target.classList.add("clicked");
    setTimeout(() => {
      e.target.classList.remove("clicked");
      setName(choice);
      setToss(true);
    }, 350);

    setTimeout(() => {
      setChoose(true);
    }, 4200);
  };

  const startgameHandler = (e) => {
    e.target.classList.add("clicked");
    setTimeout(() => {
      e.target.classList.remove("clicked");
      setWait(true);
    }, 350);
  };

  const text = "...";
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setDisplayText(""); // Clear the text to restart typing
        setCurrentIndex(0);
      }
    }, 600); // Typing speed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [currentIndex, text]);

  return (
    <div className="headortail_container">
      <div className="headortail_container_card">
        {!toss ? (
          <>
            <div className="headortail_container_upper">
              <h1>What do you call?</h1>
            </div>
            <div className="headortail_container_lower">
              <button
                className="lifted-button"
                onClick={(e) => handleClick("head", e)}
              >
                Heads
              </button>
              <button
                className="lifted-button"
                onClick={(e) => handleClick("tail", e)}
              >
                Tails
              </button>
            </div>
          </>
        ) : !choose ? (
          <div className="coin_container">
            <h1>You choose {name}</h1>
            <div className="coin rotate">
              <img className="front" src={coin}></img>
            </div>
          </div>
        ) : !wait ? (
          <div className="result_container">
            <Confetti width={width} height={height} />
            <h1>{win}</h1>
            <div className="result_container_lower">
              <button
                className="lifted-button"
                onClick={(e) => startgameHandler(e)}
              >
                Start Game
              </button>
            </div>
          </div>
        ) : (
          <div className="waiting_container">
          <div>  <h1>
              Waiting for players <span>{displayText}</span>
            </h1></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadOrTail;
