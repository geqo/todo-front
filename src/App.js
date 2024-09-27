import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
      <div style={{ width: '800px', margin: '0 auto' }}>
          <Router>
              <Routes>
                  <Route path="/" element={<TodoList />} />
                  <Route path="/todos/new" element={<TodoForm />} />
                  <Route path="/todos/edit/:id" element={<TodoForm />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
