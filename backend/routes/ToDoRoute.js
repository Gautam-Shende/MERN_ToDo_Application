// Import Express to create router
import express from "express";

// Import controller functions to handle requests
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/ToDoController.js";

// Create a new router
const router = express.Router();

// ----------------------
// Define routes for todos
// ----------------------

// GET all todos
router.get("/", getTodos);

// CREATE a new todo
router.post("/", createTodo);

// UPDATE a todo by its ID
router.put("/:id", updateTodo);

// DELETE a todo by its ID
router.delete("/:id", deleteTodo);

// Export the router to use in main app
export default router;
