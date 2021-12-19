// container apps:

// 1.clock-----alarm, time, stopwatch, timer

// 2.task-----make notes,remainder,tasks etc.

// 3.file identifier -----open file from local and accept perticular files.

// 4.google map api --- show map from google.

import React from "react";
import TimerApp from "./apps/TimerApp/TimerApp";
import Container from "./styles/Container";
import TaskApp from "./apps/TaskApp/TaskApp";
import BirthdayApp from "./apps/BirthdayApp/BirthdayApp";
import PigGame from "./apps/PigGame/PigGame";
import Calculator from "./apps/Calculator/Calculator";
import Navbar from "./components/Navbar.js/Navbar";

const components = [
  <BirthdayApp />,
  <TaskApp />,
  <TimerApp />,
  <PigGame />,
  <Calculator />,
];

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
      <Navbar />
    </>
  );
}

export default App;
