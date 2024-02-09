import React from 'react';
import Task from "../components/Task";
import App from "../components/App";



function Tasks ({ task, onDelete }) {
  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;

