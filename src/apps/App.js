// container apps:

// 1.clock-----alarm, time, stopwatch, timer

// 2.task-----make notes,remainder,tasks etc.

// 3.file identifier -----open file from local and accept perticular files.

// 4.google map api --- show map from google.

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
