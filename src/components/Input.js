import React from "react";
import styled from "styled-components";

function Input({ children, type, value, onChange, className }) {
  return (
    <InputStyle>
      <label htmlFor={children}>{children}</label>
      <input
        className={className}
        id={children}
        type={type}
        value={value}
        onChange={onChange}
      />
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

// .input {
//   margin: 2rem auto;
//   padding: 1rem;
//   width: 90%;
//   max-width: 40rem;
// }

// .input label {
//   display: block;
//   font-weight: bold;
//   margin-bottom: 0.5rem;
// }

// .input input {
//   font: inherit;
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   padding: 0.15rem;
//   margin-bottom: 0.5rem;
// }

// .input input:focus {
//   outline: none;
//   border-color: #4f005f;
// }
