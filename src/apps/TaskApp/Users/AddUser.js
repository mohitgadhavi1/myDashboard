import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ErrorModal from "../../../components/ErrorModal";
import styled from "styled-components";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a value.",
      });
      return;
    }

    props.onAddUser(enteredUsername);
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <AddTaskStyle>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form className="form" onSubmit={addUserHandler}>
        <Input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></Input>
        <Button className="add-btn" type="submit">
          Add
        </Button>
      </form>
    </AddTaskStyle>
  );
};

const AddTaskStyle = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  .form {
    display: flex;
    align-items: baseline;
    width: 100%;
  }
`;

export default AddUser;
