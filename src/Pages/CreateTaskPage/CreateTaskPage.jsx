import React from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import { postTask } from '../../services/taskServices';
import { useNavigate } from 'react-router-dom';

function CreateTaskPage() {
  const navigate = useNavigate();

  const handleCreateTask = async (task) => {
    await postTask(task);
    navigate("/"); 
  };

  return (
    <div className='create-task-page'>
      <TaskForm onCreate={handleCreateTask} />
    </div>
  );
}

export default CreateTaskPage;
