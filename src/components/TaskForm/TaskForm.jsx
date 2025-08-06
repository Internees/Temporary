import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ onCreate, initialData = {}, isEdit = false }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (isEdit && initialData) {
      setId(initialData.id || null);
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setStatus(initialData.status || false);
    }
  }, [initialData, isEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      ...(isEdit && { id }), 
      title,
      description,
      status
    };

    console.log("Submitting Task:", task);
    onCreate(task);

    if (!isEdit) {
      setTitle('');
      setDescription('');
      setStatus(false);
    }
  };

  return (
    <div className='task-form'>
      <h1>{isEdit ? 'Update Task' : 'Create Task'}</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type="text"
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task Title'
          autoFocus
          required
        />

        <label htmlFor='description'>Description</label>
        <input
          type="text"
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Task Description'
        />

        <div className='task-status'>
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id='status'
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>

        <div className='task-footer'>
          <button type="submit">{isEdit ? 'Update' : 'Create'}</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
