import React from "react";
import Task from "./Task";
import { useState} from "react";

function TaskList({tasks,filter}) {

  const [mytasks, setmytasks] = useState(tasks);
 
  function deleteTask(id){
  
   let newTasks=mytasks.filter((name,index)=>
    id !== index
  )
  setmytasks((mytasks)=>newTasks);
  }

  
  return (
    <div className="tasks">
      {mytasks.map((task,index)=>(
        <Task key={index} id={index} deleteTask={deleteTask} text={task.text} category={task.category}/>
      ))}
    </div>
  );
}

export default TaskList;
