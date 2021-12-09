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
      <Button className="btn">🔄 New game</Button>
      <Button className="btn">🎲 Roll dice</Button>
      <Button className="btn">📥 Hold</Button>
    </PigGameStyle>
  );
}

const PigGameStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  .player--0 {
  }
  .player--1 {
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
  }
  .btn {
    position: absolute;
    bottom: 10%;
    color: black;
    background-color: pink;

    min-width: 6rem;
  }
`;
export default PigGame;
