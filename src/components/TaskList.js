import React from 'react';
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks:</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
