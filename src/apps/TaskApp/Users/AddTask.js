import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ErrorModal from "../../../components/ErrorModal";
import styled from "styled-components";

const AddTask = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  return (
    <AddTaskStyle>
      <form className="form" onSubmit={submitHandler}>
        <Input
          type="text"
          placeHolder=" Whats on your Mind?"
          value={input}
          onChange={inputChangeHandler}
          className="task-input"
          name="text"
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
    // border: 1px solid white;
  }
  .task-input {
    border: 2px solid #5d0cff;
    border-radius: 5px;
    outline: none;
    height: 1.4rem;
    width: 140%;
    background: transparent;
    color: #fff;
  }
  .add-btn {
    position: relative;
    right: -18%;
  }
`;

export default AddTask;
