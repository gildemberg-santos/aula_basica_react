import React, { useState, useEffect } from "react";
import "./App.css";
import ListTask from "./ListTask";
import InputTask from "./InputTask";
import { Save, Load } from "./Helper/Actions";

function App() {
  const [listTask, setListTask] = useState([]);

  const handleNewTask = (currentTask) => {
    Save(currentTask);
    setListTask(Load());
  }

  useEffect(() => {
    setListTask(Load());
  }, []);

  return (
    <>
      <h1 className="m-4"># Taks</h1>
      <InputTask className="m-4" onClick={handleNewTask} placeholder="# New Task" />
      <ListTask className="m-4" list={listTask} />
    </>
  );
}

export default App;
