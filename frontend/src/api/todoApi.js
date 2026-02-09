// importing axios for joining backend to frontend
import axios from "axios";

// API Function for fecth the backend API
const API = axios.create({
  baseURL: "http://localhost:5000/api/todos",
});

// Default Routes for CURD Operation for to-do
export const getTodos = () => API.get("/");
export const createTodo = (data) => API.post("/", data);
export const updateTodo = (id, data) => API.put(`/${id}`, data);
export const deleteTodo = (id) => API.delete(`/${id}`);
