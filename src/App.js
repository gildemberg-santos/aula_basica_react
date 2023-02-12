import React, { useState, useEffect } from 'react';
import './App.css';
import ListTask from './ListTask';
import InputTask from './InputTask';
import { Save, Load } from './Helper/Actions';

function App() {
  const [listTask, setListTask] = useState([]);

  const Preferences = {
    ColorAccent: "#21c25e"
  }

  const handleNewTask = (currentTask) => {
    Save(currentTask);
    setListTask(Load());
  }

  useEffect(() => {
    setListTask(Load());
  }, []);

  return (
    <>
      <h1 style={{marginLeft: 25, marginTop: 25}}>Taks</h1>
      <InputTask onClick={handleNewTask} accent={Preferences.ColorAccent} placeholder='New Task' />
      <ListTask list={listTask} style={{ marginTop: 20 }} accent={Preferences.ColorAccent} />
    </>
  );
}

export default App;
