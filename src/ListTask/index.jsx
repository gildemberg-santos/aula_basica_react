import React, { useState, useEffect } from "react";
import { ListTaskContainer, ListTaskItem, ButtonIcon } from "./style";
import { Delete, Load } from "../Helper/Actions";

const ListTask = ({list, accent, onLoad, ...props }) => {
  const [tasks, setTasks] = useState(list);

  const handleDelete = (index) => {
    Delete(index);
    setTasks(Load());
  };

  useEffect(() => {
    setTasks(list);
  }, [list]);

  return (
    <ListTaskContainer accent={accent} {...props}>
      {tasks.map((task, index) => (
        <ListTaskItem key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>{task}</div>
          <ButtonIcon className={`bi bi-trash-fill`} style={{ backgroundColor: accent }} onClick={() => handleDelete(index)} ></ButtonIcon>
        </ListTaskItem>
      ))}
    </ListTaskContainer>
  );
}

export default ListTask;
