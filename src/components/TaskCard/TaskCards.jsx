import React from 'react';
import './TaskCards.css';

function TaskCards({ id, title, desc, status, onTaskSelect, onEdit, onDelete }) {
  return (
    <div
      className="task-card"
      onClick={() => onTaskSelect(id)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onTaskSelect(id);
      }}
    >
      <h3>{title}</h3>
      <hr />
      <p>{desc}</p>
      <hr />
      <footer>
        <p>{status ? "Completed" : "Pending"}</p>
        <div className="task-buttons">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); 
              onEdit(id);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
}

export default TaskCards;
