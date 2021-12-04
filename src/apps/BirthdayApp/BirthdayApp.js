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
  position: absolute;
  justify-content: center;
  align-items: center;
  p {
    color: hsl(210, 22%, 49%);
  }
  .person {
    display: flex;
    flex-direction: column;
    column-gap: 0.75rem;
    margin-bottom: 1.5rem;
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
