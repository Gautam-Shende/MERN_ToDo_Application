// importing axios for joining backend to frontend
import axios from "axios";

// API Function for fecth the backend API
const API = axios.create({
  baseURL: "https://mern-todo-application-ah91.onrender.com/api/todos"
});

// Default Routes for CURD Operation for to-do
export const getTodos = () => API.get("/");
export const createTodo = (data) => API.post("/", data);
export const updateTodo = (id, data) => API.put(`/${id}`, data);
export const deleteTodo = (id) => API.delete(`/${id}`);
