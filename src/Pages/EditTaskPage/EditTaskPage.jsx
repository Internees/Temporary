import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, putTask } from '../../services/taskServices';
import TaskForm from '../../components/TaskForm/TaskForm';

function EditTaskPage() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const data = await getTaskById(id);
      setTaskData(data);
    } catch (error) {
      console.error("Failed to fetch task:", error);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      await putTask(id, updatedTask); 
      navigate('/'); 
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div className="edit-task-page">
      <h1>Edit Task</h1>
      <hr />
      {taskData ? (
        <TaskForm
          onCreate={handleUpdateTask}  
          initialData={taskData}       
          isEdit={true}                
        />
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
}

export default EditTaskPage;
