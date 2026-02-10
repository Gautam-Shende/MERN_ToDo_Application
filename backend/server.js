// Import required packages
import express from "express"; // For creating server and routes
import mongoose from "mongoose"; // For MongoDB connection and models
import cors from "cors"; // To allow cross-origin requests
import dotenv from "dotenv"; // To load environment variables
import ToDoRoute from "./routes/ToDoRoute.js"; // Import todo routes

// Create an Express app
const app = express();

// Enable CORS so frontend can make requests
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

// Parse incoming JSON requests automatically
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// ----------------------
// MongoDB Connection
// ----------------------
mongoose
  .connect(process.env.MONGO_URI, { dbName: "To_Do_App" }) // Connect to MongoDB using URI from .env
  .then(() => console.log("MongoDB Connected")) // Success message
  .catch((err) => {
    console.error("MongoDB Error:", err); // Error handling
  });

// ----------------------
// Default home route
// ----------------------
app.get("/", (req, res) => {
  res.json({ message: "this is your home route" }); // Simple message for testing
});

// ----------------------
// Todo API routes
// ----------------------
app.use("/api/todos", ToDoRoute); // All routes starting with /api/todos go to ToDoRoute

// ----------------------
// Start the server
// ----------------------
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`)); // Start server and log port

// Export app (useful for testing or serverless deployment)
export default app;
