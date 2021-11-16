import React from "react";
import styled from "styled-components";

function Input({ children, type, value, onChange }) {
  return (
    <InputStyle>
      <label htmlFor={children}>{children}</label>
      <input id={children} type={type} value={value} onChange={onChange} />
    </InputStyle>
  );
}

export default Input;

const InputStyle = styled.div`
  margin: 1rem;
  & label {
    text-transform: capitalize;
    padding-right: 5px;
  }
`;
