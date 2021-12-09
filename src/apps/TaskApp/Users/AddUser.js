import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ErrorModal from "../../../components/ErrorModal";

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
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={addUserHandler}>
        <Input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></Input>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddUser;
