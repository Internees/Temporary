import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ onCreate, initialData = {}, isEdit = false }) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [taskId, setTaskId] = useState(-1);
  const [hasInitialized, setHasInitialized] = useState(false);

useEffect(() => {
  if (initialData && !hasInitialized) {
    setTaskId(initialData.id || -1);
    setTitle(initialData.title || '');
    setDescription(initialData.description || '');
    setStatus(initialData.status || false);
    setHasInitialized(true);
  }
}, [initialData, hasInitialized]);


  const handleSubmit = (event) => {
  event.preventDefault();
  
  const task = {
    title,
    description: Description,
    status,
    ...(isEdit && { id: taskId }) 
  };

  onCreate(task);

  if (!isEdit) {
    setTitle("");
    setDescription("");
    setStatus(false);
  }
};

  return (
    <div className='task-form'>
      <h1>{isEdit ? "Update Task" : "Create Task"}</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Task Title' autoFocus required />

        <label>Description</label>
        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} placeholder='Task Description' />

        <div className='task-status'>
          <label>Status</label>
          <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
        </div>

        <div className='task-footer'>
          <button type="submit">{isEdit ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
