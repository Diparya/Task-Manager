'use client'
import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === '') return;

    if (editTaskId) {
      // Update existing task
      setTasks(tasks.map((task) => 
        task.id === editTaskId ? { ...task, title: taskInput } : task
      ));
      setEditTaskId(null); // Reset edit mode
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        title: taskInput,
        completed: false,
        priority: 'low',
      };
      setTasks([{ ...newTask, animationClass: 'fade-in' }, ...tasks]);
    }

    setTaskInput(''); // Clear input
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTaskInput(taskToEdit.title);
      setEditTaskId(id);
    }
  };

  const deleteTask = (id) => {
    setDeletingTask(id);
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
      setDeletingTask(null);
    }, 300);
  };

  const completeTask = (id) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));

  const changeTaskPriority = (id, priority) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, priority } : task)));

  const priorityLevels = {
    high: 1,
    medium: 2,
    low: 3,
  };

  const sortedTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'priority') return priorityLevels[a.priority] - priorityLevels[b.priority];
      if (sortOrder === 'completed') return a.completed - b.completed;
      return 0;
    });

  return (
    <div className="container mx-auto p-6 max-w-lg bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Task Manager</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
          className="w-full text-gray-600 p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
        />
        
        <button
          onClick={addTask}
          className={`w-full py-2 mt-2 text-white rounded-lg ${
            editTaskId ? 'bg-green-800' : 'bg-purple-800'
          }`}
        >
          {editTaskId ? 'Edit Task' : 'Add Task'}
        </button>
        
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-gray-600 p-2 mt-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
        />
        
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="w-full text-gray-600 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
        >
          <option value="default">Sort By</option>
          <option value="priority">Priority</option>
          <option value="completed">Completion</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
            onPriorityChange={changeTaskPriority}
            onEdit={editTask}
            deleting={deletingTask === task.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
