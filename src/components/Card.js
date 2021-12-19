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
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  & ul {
    list-style: none;
  }
`;
