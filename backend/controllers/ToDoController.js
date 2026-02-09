// Import Todo model so we can interact with the todos collection
import Todo from "../models/Todo.js";

// ============= GET all todos ==========
// default export function for fetch and get the todo 
export const getTodos = async (req, res) => {
  try {
    // Fetch all todos from database
    // Sort them by latest created first
    const todos = await Todo.find().sort({ createdAt: -1 });

    // Send todos back as response
    res.status(200).json(todos);
  } catch (error) {
    // If something goes wrong, send server error
    res.status(500).json({ message: error.message });
  }
};

// ========== CREATE a new todo =============
// defualt export function for create the to-do list
export const createTodo = async (req, res) => {
  try {
    // Get title and description from request body
    const { title, description } = req.body;

    // Title is required, so check it first
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    // Create a new todo in database
    const todo = await Todo.create({
      title,
      description,
    });

    // Send newly created todo as response
    res.status(201).json(todo);
  } catch (error) {
    // Handle unexpected server errors
    res.status(500).json({ message: error.message });
  }
};

// ============ UPDATE an existing todo ==========
// defualt export funciton for updating the to-do list
export const updateTodo = async (req, res) => {
  try {
    // Find todo by ID and update it
    // new: true returns the updated document
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // If todo not found, return error
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Send updated todo as response
    res.status(200).json(todo);
  } catch (error) {
    // Handle invalid ID or bad request
    res.status(400).json({ message: error.message });
  }
};

// ========== DELETE a todo =========
// defualt export function for deleting the to-do
export const deleteTodo = async (req, res) => {
  try {
    // Find todo by ID and delete it
    const todo = await Todo.findByIdAndDelete(req.params.id);

    // If todo does not exist, return error
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Send success message after deletion
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    // Handle invalid ID or request error
    res.status(400).json({ message: error.message });
  }
};
