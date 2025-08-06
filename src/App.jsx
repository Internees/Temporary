import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from './Pages/TodoPage/TodoPage';
import CreateTaskPage from './Pages/CreateTaskPage/CreateTaskPage';
import EditTaskPage from './Pages/EditTaskPage/EditTaskPage';
import TaskCards from './components/TaskCard/TaskCards';
import './App.css';

function App() {

  const eveHandle =(id) => {console.log(id)}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/create" element={<CreateTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
