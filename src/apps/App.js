import React from "react";
import TimerApp from "./TimerApp";
import Container from "../styles/Container";
import TaskApp from "./TaskApp/TaskApp";

const components = [<TaskApp />, <TimerApp />];

function App() {
  return (
    <>
      <header>
        <h1>Projects</h1>
      </header>
      <main>
        {components.map((items) => {
          return <Container>{items}</Container>;
        })}
      </main>
    </>
  );
}

export default App;
