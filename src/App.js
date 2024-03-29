import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import ListTask from "./ListTask";
import InputTask from "./InputTask";
import { Save, Load } from "./Helper/Actions";
import ChatLeadster from "./ChatLeadster";

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
      <Header className="m-4 display-4" />
      <InputTask className="m-4" onClick={handleNewTask} placeholder="# New Task" />
      <ListTask className="m-4" list={listTask} />
      <ChatLeadster
        identifier="P2IlCcN90I9INTRBQsizt5K5u"
        scriptUrl="https://cdn.neurologic.com.br/neurolead/neurolead.min.js"
      />
    </>
  );
}

export default App;
