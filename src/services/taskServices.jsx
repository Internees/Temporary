import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7186/Todo",
  headers: {
    "Content-Type": "application/json"
  }
});

export async function getAllTasks() {
  try {
    const response = await api.get("/Tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching all tasks:", error);
    throw error;
  }
}

export async function getTaskById(id) {
  try {
    const response = await api.get(`/Tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    throw error;
  }
}

export async function postTask(task) {
  try {
    const response = await api.post("/Tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

export async function putTask(id, task) {
  try {
    const response = await api.put(`/Tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${id}:`, error);
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const response = await api.delete(`/Tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with ID ${id}:`, error);
    throw error;
  }
}
