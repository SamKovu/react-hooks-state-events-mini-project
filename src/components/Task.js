import React from "react";

function Task({id,deleteTask,text,category}) {
  
 
function handleDelete(){
  deleteTask(id)
}
  

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button onClick={()=>handleDelete()} className="delete">X</button>
    </div>
  );
}

export default Task;
