import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <CardStyle className={props.className}>{props.children}</CardStyle>;
};

export default Card;

const CardStyle = styled.div`
  background: white;
  color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  & ul {
    list-style: none;
  }
`;
