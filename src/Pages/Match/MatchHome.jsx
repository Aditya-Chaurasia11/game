import React from "react";
import "./matchhome.css";
import avatar from "../../images/avatar.png";

const MatchHome = () => {
  const handleClick = (e) => {
    e.target.classList.add("clicked");
    setTimeout(() => {
      e.target.classList.remove("clicked");
    }, 350);
  };

  return (
    <div className="matchhome_container">
      <div className="matchhome_container_upper">
        <div className="matchhome_container_upper_first">
          <div className="matchhome_container_upper_first_img">
            <img src={avatar}></img>
          </div>
          <div className="matchhome_container_upper_first_run">
            <p>Adasd</p>
            <hr></hr>

            <p>0/0</p>
          </div>
        </div>
        <div className="matchhome_container_upper_second">
          <div className="matchhome_container_upper_second_up">
            <p className="para">Adaad (X)</p>
            <hr />
            <div className="matchhome_container_upper_second_current">
              <p>0</p>
            </div>
          </div>
          <div className="matchhome_container_upper_second_down">
            <p className="para2">over : 0.0</p>
          </div>
        </div>
        <div className="matchhome_container_upper_third">
          <div className="matchhome_container_upper_first_img">
            <img src={avatar}></img>
          </div>
          <div className="matchhome_container_upper_first_run">
            <p>Adasd</p>
            <hr></hr>
            <p>0/0</p>
          </div>
        </div>
      </div>
      <div className="matchhome_container_lower">
        <div className="matchhome_container_lower_upper"><p>X | Batting</p></div>
        <div className="matchhome_container_lower_lower headortail_container_lower">
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            1
          </button>
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            2
          </button>
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            3
          </button>
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            4
          </button>
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            5
          </button>
          <button className="lifted-button" onClick={(e) => handleClick(e)}>
            6
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchHome;
