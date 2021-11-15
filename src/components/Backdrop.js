import React from "react";
import styled from "styled-components";

function Backdrop(props) {
  return (
    <BackdropStyle onClick={props.onClick}>{props.children}</BackdropStyle>
  );
}

export default Backdrop;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
