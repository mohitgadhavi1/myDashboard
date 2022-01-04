import React, { useState } from "react";
import dice5 from "./dice-5.png";
import styled from "styled-components";
import Button from "../../components/Button";

function PigGame() {
  let scores, currentScore, activePlayer, playing;

  return (
    <PigGameStyle>
      <div className="player player--0 player--active">
        <h2 class="name" id="name--0">
          player-1
        </h2>
        <p class="score" id="score--0">
          0
        </p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">
            0
          </p>
        </div>
      </div>
      <div className="player player--1">
        <h2 class="name" id="name--1">
          player-2
        </h2>
        <p class="score" id="score--1">
          0
        </p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">
            0
          </p>
        </div>
      </div>

      <img src={dice5} alt="Playing dice" className="dice" />
      <div className="btn-container">
        <Button className="btn">🔄 New game</Button>
        <Button className="btn">🎲 Roll dice</Button>
        <Button className="btn">📥 Hold</Button>
      </div>
    </PigGameStyle>
  );
}

const PigGameStyle = styled.div`
  display: flex;

  position: absolute;
  height: 100%;
  width: 100%;
  .player--0 {
    left: 5%;
  }
  .player--1 {
    right: 5%;
  }
  .player {
    position: absolute;
    top: 0;
  }
  .dice {
    position: absolute;
    border-radius: 5px;
    width: 2rem;
    height: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-container {
    position: absolute;
    bottom: 5%;
    width: 100%;
  }
  .btn {
    color: black;
    background-color: pink;

    min-width: 5rem;
  }
`;
export default PigGame;
