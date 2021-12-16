import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import Backdrop from "./Backdrop";

const ErrorModal = (props) => {
  return (
    <ErrorModalStyle>
      <Backdrop onClick={props.onConfirm} />
      <Card className={"modal"}>
        <header className={"header"}>
          <h2>{props.title}</h2>
        </header>
        <div className={"content"}>
          <p>{props.message}</p>
        </div>
        <footer className={"actions"}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </ErrorModalStyle>
  );
};

export default ErrorModal;

const ErrorModalStyle = styled.div`
  .modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 50%;
    z-index: 100;
    overflow: hidden;
  }

  .header {
    background: #4f005f;
    padding: 1rem;
  }

  .header h2 {
    margin: 0;
    color: white;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;
