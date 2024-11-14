// Task.js
import React from 'react';

const Task = ({ task, onDelete, onComplete, onPriorityChange, onEdit, deleting }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 transform overflow-hidden space-y-2 md:space-y-0 ${
        task.animationClass || '' // Apply fade-in on new task
      } ${deleting ? 'fade-out' : ''}`} // Apply fade-out on delete
    >
      <div className="flex items-center w-full md:w-3/4 lg:w-4/5 space-x-2 break-words">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          className="form-checkbox h-5 w-5 text-violet-600"
        />
        
        <span
          className={`${
            task.completed ? 'line-through text-purple-800' : ''
          } text-purple-800 font-medium break-words overflow-hidden`}
          style={{
            wordBreak: 'break-word', // Ensures long words break
            wordWrap: 'break-word',   // Wraps long lines
            maxWidth: '100%',         // Prevents text overflow
          }}
        >
          {task.title}
        </span>
      </div>

      <div className="flex items-center space-x-2 w-full md:w-auto mt-2 md:mt-0 ml-2">
        <select
          value={task.priority}
          onChange={(e) => onPriorityChange(task.id, e.target.value)}
          className="p-1 text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-700 w-24"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        
        <button
          onClick={() => onEdit(task.id)}
          className="bg-green-800 text-white p-1 px-2 hover:bg-white hover:text-green-800 rounded-md border border-green-800 focus:outline-none w-20"
        >
          Edit
        </button>
        
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-800 text-white p-1 px-2 hover:bg-white hover:text-red-500 rounded-md border border-red-500 focus:outline-none w-20"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
