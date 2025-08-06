import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../../services/taskServices';
import TaskCards from '../../components/TaskCard/TaskCards';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import'./TodoPage.css'

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    getAllTasks().then(res => setTasks(res));
  }, [location]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    const updated = await getAllTasks();
    setTasks(updated);
  };

  return (
    <div className='todo-page'>
      <div className="header"><h1>Get It Done</h1>
      <button className='my-btns' onClick={() => navigate('/create')}>
        Add Task
      </button>
                    <hr />
      </div>
      <div className='task-list'>

        {tasks.map(task => (
          <TaskCards
            key={task.id}
            id={task.id}
            title={task.title}
            desc={task.description}
            status={task.status}
            onTaskSelect={() => {}}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
