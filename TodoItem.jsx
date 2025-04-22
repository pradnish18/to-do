import React from 'react';

// TodoItem component represents a single todo task
// Props:
// - todo: the todo item object with {id, text, completed}
// - onToggle: function to toggle completion status
// - onDelete: function to remove the todo
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div 
      className={`group flex items-center p-4 rounded-lg ${
        todo.completed 
          ? 'bg-green-900/20 border-green-500/30' 
          : 'bg-gray-800/50 border-purple-500/30'
      } border-2 transition-all hover:border-opacity-100 hover:shadow-lg hover:shadow-purple-500/10`}
    >
      {/* Checkbox for completion */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`mr-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed 
            ? 'border-green-500 bg-green-500 text-white' 
            : 'border-purple-500 group-hover:border-purple-400'
        }`}
        title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Todo text content with completion styling */}
      <div className="flex-1 min-w-0">
        <p className={`truncate transition-all ${
          todo.completed 
            ? 'text-gray-500 line-through' 
            : 'text-white'
        }`}>
          {todo.text}
        </p>
        {todo.completed && (
          <p className="text-green-500 text-xs mt-1 animate-fade-in">
            Completed! 🎉
          </p>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all"
        title="Delete task"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
