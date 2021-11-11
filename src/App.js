import React from "react";
import TimerApp from "./TimerApp";
import Container from "./styles/Container";

const components = [<TimerApp />, <TimerApp />];

function App() {
  return (
    <>
      <header>
        <h1>Projects</h1>
      </header>
      <main>
        {/* <Container>
           <TimerApp />
        </Container> */}

        {components.map((items) => {
          return <Container>{items}</Container>;
        })}
      </main>
    </>
  );
}

export default App;
