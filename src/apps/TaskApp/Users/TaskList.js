import React from "react";
import Card from "../../../components/Card";
import styled from "styled-components";

const TaskList = (props) => {
  return (
    <Card height="70%" bottom="2.5%">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Card>
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
