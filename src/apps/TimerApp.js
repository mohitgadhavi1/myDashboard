import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";

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
`;

export default TimerApp;
