import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

function TimerApp() {
  const time = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(time);

  const updatedTime = () => {
    const time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updatedTime, 1000);

  return (
    <TimerAppStyle>
      <div className="clock">
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <div className="hour_hand"></div>
      <div className="min_hand"></div>
      <div className="sec_hand"></div>
    </TimerAppStyle>
  );
}

const TimerAppStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
  display: flex;
  width: 95%;
  height: 80%;

  position: absolute;
  font-family: sans-serif;

  .clock {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    color: #444;
    text-align: center;
    background: linear-gradient(to right, #00aaff, #00ff6c);
  }
  .clock::after {
    background: #aaa;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
  }
  .hour_hand {
    position: absolute;
    width: 6px;
    height: 60px;
    background: #222;
    top: 30%;
    left: 49%;
    transform-origin: bottom;
  }

  .min_hand {
    position: absolute;
    width: 4px;
    height: 80px;
    background: #444;
    top: 22.5%;
    left: 49%;
    transform-origin: bottom;
  }

  .sec_hand {
    position: absolute;
    width: 2px;
    height: 118px;
    background: red;
    top: 10.5%;
    left: 50%;
    transform-origin: bottom;
  }

  .clock span {
    position: absolute;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
  }

  .twelve {
    top: 10px;
    left: 46%;
  }

  .one {
    top: 10%;
    right: 26%;
  }

  .eleven {
    top: 10%;
    left: 26%;
  }

  .two {
    top: 25%;
    right: 10%;
  }

  .three {
    right: 10px;
    top: 46%;
  }

  .four {
    right: 30px;
    top: 67%;
  }

  .five {
    right: 78px;
    top: 80%;
  }

  .six {
    bottom: 10px;
    left: 50%;
  }

  .seven {
    left: 80px;
    top: 82%;
  }

  .eight {
    left: 30px;
    top: 67%;
  }

  .nine {
    left: 10px;
    top: 46%;
  }

  .ten {
    top: 25%;
    left: 10%;
  }
`;

export default TimerApp;
