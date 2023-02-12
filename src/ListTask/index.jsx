import React, { useState, useEffect } from "react";
import { Delete, Load } from "../Helper/Actions";
import {
  ListTaskContainer,
  ListTaskItem,
  ListTaskItemText,
  ButtonIcon
} from "./style";

const ListTask = ({ list, onLoad, ...props }) => {
  const [tasks, setTasks] = useState(list);

  const handleDelete = (index) => {
    Delete(index);
    setTasks(Load());
  };

  useEffect(() => {
    setTasks(list);
  }, [list]);

  return (
    <ListTaskContainer {...props}>
      {tasks.map((task, index) => (
        <ListTaskItem key={index}>
          <ListTaskItemText>
            <samp className="color-accent">
              <i className="bi bi-asterisk" />
            </samp>
            {` ${task}`}
          </ListTaskItemText>
          <ButtonIcon
            className="bi bi-trash-fill background-accent"
            onClick={() => handleDelete(index)}
          />
        </ListTaskItem>
      ))}
    </ListTaskContainer>
  );
}

export default ListTask;
