import React from "react";
import styled from "styled-components";

function Button({ children, type, onClick }) {
  return (
    <ButtonStyle onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button`
  display: inline;

  width: 4rem;
  border-radius: 5px;
  color: white;
  background-color: #282c34;
  height: 1.5rem;
  cursor: pointer;
  margin: 0.5rem;
  border: 1px solid grey;
`;
