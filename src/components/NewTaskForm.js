import React, { useState } from 'react';
import NewTaskForm from "../components/NewTaskForm";
import App from "../components/App";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(text, category);
    setText('');
  };

  return (
    <div>
      <h2>Add New Task:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Task" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
