import React, { useState } from "react";
import Card from "../../../components/Card";
import styled from "styled-components";
import AddTask from "./AddTask";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(...tasks);
  };

  return (
    <>
      <AddTask onSubmit={addTask} />
      <Card height="70%" bottom="2.5%">
        <ul>{/* <li key={task.id}>{newTasks}</li> */}</ul>
      </Card>
    </>
  );
};

const TaskListStyle = styled.div`
  .icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
  .delete-icon {
    margin-right: 5px;
    color: #fff;
  }

  .edit-icon {
    color: #fff;
  }
`;

export default TaskList;
