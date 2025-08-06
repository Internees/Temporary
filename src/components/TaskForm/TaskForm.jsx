import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      title,
      description,
      status
    };
    console.log("Submitting Task:", task);
    onCreate(task);

    // Reset form
    setTitle("");
    setDescription("");
    setStatus(false);
  };

  return (
    <div className='task-form'>
      <h1>Create Task</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task Title'
          autoFocus
          required
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Task Description'
        />

        <div className='task-status'>
          <label>Status</label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>

        <div className='task-footer'>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
