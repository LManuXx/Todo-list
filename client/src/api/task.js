import axios from './axios.task';

export const getTasksRequest = ()=> axios.get('/tasks');
export const createTaskRequest = (task)=> axios.post(`/tasks`, task);
export const updateTaskRequest = (task)=> axios.put(`/tasks/${task._id}`);
export const deleteTaskRequest = (id)=> axios.delete(`/tasks/${id}`);
export const getTaskRequest = (id)=> axios.get(`/tasks/${id}`);