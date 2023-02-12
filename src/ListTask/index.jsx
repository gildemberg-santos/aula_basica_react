import React, { useState, useEffect } from "react";
import { ListTaskContainer, ListTaskItem, ListTaskItemText, ButtonIcon } from "./style";
import { Delete, Load } from "../Helper/Actions";

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
          <ListTaskItemText><i className="bi bi-asterisk" /> {task}</ListTaskItemText>
          <ButtonIcon
            className="bi bi-trash-fill"
            onClick={() => handleDelete(index)}
          />
        </ListTaskItem>
      ))}
    </ListTaskContainer>
  );
}

export default ListTask;
