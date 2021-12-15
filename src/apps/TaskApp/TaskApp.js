import React, { useState } from "react";
import styled from "styled-components";
import AddTask from "./Users/AddTask";
import TaskList from "./Users/TaskList";

function TaskApp() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <TaskAppStyle>
      <AddTask onAddUser={addUserHandler} />
      <TaskList users={usersList} />
    </TaskAppStyle>
  );
}

const TaskAppStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #161a2b;
  text-align: center;
`;

export default TaskApp;
