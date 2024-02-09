import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from './data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskFormSubmit = (text, category) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      category
    };
    setTasks([...tasks, newTask]);
  };

  const handleCategoryFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter categories={[...CATEGORIES, 'All']} selectedCategory={selectedCategory} onCategoryFilterChange={handleCategoryFilterChange} />
      <TaskList tasks={filteredTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;