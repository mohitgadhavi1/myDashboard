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
      <h6>{cTime}</h6>
      <div className="timer-btn">
        <Button>start</Button>
        <Button>stop</Button>
      </div>
    </TimerAppStyle>
  );
}

const TimerAppStyle = styled.div`
  display: flex;
  width: 95%;
  height: 80%;
  border: 1px solid white;

  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    color: #444;
    text-align: center;
  }
`;

export default TimerApp;