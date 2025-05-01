import logo from './logo.svg';
import './App.css';
import { AddNewTask } from './Components/AddNewTask';
import { useState } from 'react';
import { ListTasks } from './Components/ListTasks';

function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');
  const handleNewTask = () => {
    if (newTask.trim() === "") return ;
    setTasks([...tasks, {text: newTask , completed : false}])
    setNewTask("");
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((task,i) => {
     return  i === index ? {...task, completed : !task.completed } : task
    })
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => {
     return i !== index ;
    })
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <h1>My TaskManager </h1>
      <AddNewTask handleNewTask={handleNewTask} newTask={newTask} setNewTask={setNewTask}/>
      <ListTasks tasks={tasks} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
