import React from "react";
import styled from "styled-components";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <ListStyle key={id} className="person">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{age} years</p>
          </ListStyle>
        );
      })}
    </>
  );
};

const ListStyle = styled.article`
  display: flex;
  background-color: yellowgreen;
  width: 75%;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: space-between;
`;

export default List;
