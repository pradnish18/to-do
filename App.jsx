import React from 'react'
// Import our main TodoList component
import TodoList from './components/TodoList'

// Main App component that serves as the root of our application
const App = () => {
  return (
    // Main container with dark theme and full height
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Center content with max width for better readability */}
      <div className="max-w-2xl mx-auto">
        {/* Our todo list component where all the magic happens */}
        <TodoList />
      </div>
    </div>
  )
}

export default App