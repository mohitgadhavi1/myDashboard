import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardStyle
      bgColor={props.bgColor}
      bottom={props.bottom}
      height={props.height}
    >
      {props.children}
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height};
  bottom: ${(props) => props.bottom};
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  width: 90%;
  margin: 2.5%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  & ul {
    list-style: none;
  }
`;
