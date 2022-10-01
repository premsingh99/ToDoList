

//import styles from "./App.module.css";
import {Task} from "./Task.js"
import { useState } from 'react'

function App() { 
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
      setNewTask(event.target.value)
  };

  const addtask = () => {
      const task = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length -1].id + 1,
        taskName : newTask,
        completed : 0,
      };
      const arr = [...todolist, task];
      setTodolist(arr)
  };

  const deleteTask = (id) => {
      setTodolist(todolist.filter((task) => id !== task.id));
  };

  const completeTask = (id) => {
    setTodolist(todolist.map((task) =>{
      if (task.id === id){
        return {...task, completed:1};
      } else {
        return task;
      }
    }
    
    ))
  }


  return (
    
    <div className="App" style={{textAlign:"center"}}>

        <div className="addTask" style={{padding:"60px",fontSize:"25px", backgroundColor:"blueviolet"}}>
        <input onChange={handleChange} style={{fontSize:"25px"}}></input>
        <button onClick={addtask} style={{fontSize:"25px"}}>Add Task</button>
        </div>

        <div className="list">
        {todolist.map((task)=> {
          return <Task 
          taskName={task.taskName} 
          id={task.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
          completed={task.completed}
          />;
        } )}
        </div>
    </div>
  );
}

export default App;
