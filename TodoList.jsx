// Import necessary React hooks and components
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

// Main TodoList component that manages the entire todo application
const TodoList = () => {
  // State for storing todos and input field value
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handler for adding new todos
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Remove a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Get a random motivational message for the header
  const getMotivationalMessage = () => {
    const messages = [
      "Let's Conquer Today's Missions! ",
      "Your Tasks, Your Victories! ",
      "Making Progress, One Task at a Time! "
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header section with modern design */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Task Master
        </h1>
        <p className="text-xl text-gray-300 animate-pulse">
          {getMotivationalMessage()}
        </p>
      </div>

      {/* Todo input form with enhanced styling */}
      <form onSubmit={addTodo} className="mb-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's on your mind today?"
            className="flex-1 p-4 rounded-lg bg-gray-800/50 text-white border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-bold shadow-lg"
          >
            Add Task
          </button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex gap-4 mb-6 justify-center">
        {['all', 'active', 'completed'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-full capitalize ${
              filter === filterType
                ? 'bg-purple-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-all`}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Todo list section with empty state and animations */}
      <div className="space-y-4">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-10 bg-gray-800/30 rounded-lg">
            <p className="text-xl text-gray-400 mb-2">
              {filter === 'all' 
                ? "Your task list is empty!" 
                : `No ${filter} tasks found`}
            </p>
            <p className="text-sm text-gray-500">
              {filter === 'all' 
                ? "Add your first task to get started!" 
                : "Switch filters to see other tasks"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        )}
      </div>

      {/* Task statistics */}
      {todos.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            {todos.filter(t => !t.completed).length} tasks remaining • {todos.filter(t => t.completed).length} completed
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
