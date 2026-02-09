// Import mongoose to create schema and model
import mongoose from "mongoose";

// Create schema for todo data
const todoSchema = new mongoose.Schema(
  {
    // Title of the todo
    // This field is required
    // trim removes extra spaces from start and end
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Description of the todo
    // Optional field, default is empty string
    description: {
      type: String,
      default: "",
    },

    // Status of the todo
    // Only allows "pending" or "completed"
    // Default value is "pending"
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create Todo model using the schema
const Todo = mongoose.model("Todo", todoSchema);

// Export model so it can be used in controllers
export default Todo;
