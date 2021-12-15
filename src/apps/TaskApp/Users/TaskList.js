import React from "react";
import Card from "../../../components/Card";
import styled from "styled-components";

const TaskList = (props) => {
  return (
    <Card bgColor="none" height="70%">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Card>
  );
};

const TaskListStyle = styled.div``;

export default TaskList;
