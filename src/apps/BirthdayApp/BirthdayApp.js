import React, { useState } from "react";
import data from "./data";
import List from "./List";
import styled from "styled-components";
import Button from "../../components/Button";

function BirthdayApp() {
  const [people, setPeople] = useState(data);
  return (
    <BirthdayAppStyle>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <Button onClick={() => setPeople([])}>clear all</Button>
    </BirthdayAppStyle>
  );
}

const BirthdayAppStyle = styled.div`
  color: hsl(209, 61%, 16%);
  background: #f28ab2;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 95%;
  width: 95%;
  border-radius: 5px;
  overflow-y: scroll;
  align-items: center;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f28ab2;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: pink;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  p {
    color: hsl(210, 22%, 49%);
  }
  .person {
    align-items: center;
  }
  .person img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default BirthdayApp;
