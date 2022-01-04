import React, { useState } from "react";
import Card from "../../../components/Card";
import styled from "styled-components";
import AddTask from "./AddTask";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const TaskList = ({ tasks, completeTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return tasks.map((task, index) => {
    <TaskListStyle
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className="icon ">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </TaskListStyle>;
  });
};

const TaskListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

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
