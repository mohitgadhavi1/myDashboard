import React from "react";
import styled from "styled-components";

function Calculator() {
  return (
    <CalcStyle>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
      </div>
    </CalcStyle>
  );
}

const CalcStyle = styled.div`
  background: linear-gradient(to right, #00aaff, #00ff6c);
  position: absolute;
  width: 100%;
  height: 100%;

  .calculator-grid {
    display: grid;
    position: absolute;
    // margin-top: 2rem;
    justify-content: center;
    grid-template-columns: repeat(4, 5rem);
    grid-template-rows: minmax(3rem, auto) repeat(5, 3rem);
  }

  .calculator-grid > button {
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid white;
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);
  }

  .calculator-grid > button:hover,
  .calculator-grid > button:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .span-two {
    grid-column: span 2;
  }

  .output {
    grid-column: 1 / -1;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding: 0.75rem;
    word-wrap: break-word;
    word-break: break-all;
  }

  .output .previous-operand {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1rem;
  }

  .output .current-operand {
    color: white;
    font-size: 2rem;
  }
`;

export default Calculator;
