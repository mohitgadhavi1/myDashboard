import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardStyle bgColor={props.bgColor} height={props.height}>
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
  bottom: 0;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  & ul {
    list-style: none;
  }
`;
