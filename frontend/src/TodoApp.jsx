import { useEffect, useState } from "react";
// Importing Axios backend API Routes
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";
// Importing React Icons
import {
  FaTrash,
  FaCheck,
  FaEdit,
  FaSave,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
// Import Bootstrap components
import {
  Container,
  Card,
  Form,
  Button,
  ListGroup,
  Badge,
  Alert,
  Spinner,
} from "react-bootstrap";

// Main Todo Function
const TodoApp = () => {
  // store all todos
  const [todoList, setTodoList] = useState([]);

  // input fields
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  // track which todo is being edited
  const [editId, setEditId] = useState(null);

  // loading state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // get all todos from backend
  const loadTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setEditId(null);
      const response = await getTodos();
      // added todo data from backend
      setTodoList(response.data);
      setTimeout(() => setIsLoading(false), 1000);
    } catch (err) {
      if (err.message === "Network Error") {
        setError(err.message || "Network error occurred");
      } else {
        // Other errors
        setError(err.message || "An unexpected error occurred");
      }
      setIsLoading(false);
    }
  };

  // load todos when page loads
  useEffect(() => {
    loadTodos();
  }, []);

  // add new todo
  const addTodo = async () => {
    if (!todoTitle.trim()) return;

    await createTodo({
      title: todoTitle,
      description: todoDesc,
    });
    // input field make clear
    setTodoTitle("");
    setTodoDesc("");
    setEditId(null);
    loadTodos();
  };

  // mark task as complete / pending
  const changeStatus = async (task) => {
    // change the status of todo complete or pending
    await updateTodo(task._id, {
      // default todo status "pending"
      status: task.status === "pending" ? "completed" : "pending",
    });
    // input field make clear
    setTodoTitle("");
    setTodoDesc("");
    setEditId(null);
    loadTodos();
  };

  // start editing a todo
  const editTodo = (task) => {
    setEditId(task._id);
    setTodoTitle(task.title);
    setTodoDesc(task.description || "");
  };

  // save edited todo
  const saveTodo = async (id) => {
    await updateTodo(id, {
      title: todoTitle,
      description: todoDesc,
    });
    // input field make clear
    setTodoTitle("");
    setTodoDesc("");
    setEditId(null);
    loadTodos();
  };

  // delete todo
  const deleteTask = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    // Default Bootstrap Container
    <Container className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Card className="w-100" style={{ maxWidth: "500px" }}>
        <Card.Body className="p-4">
          <Card.Title className="text-center mb-4 fs-2 fw-bold">
            To-Do List
          </Card.Title>

          {/*======= Error Alert =========*/}
          {error && (
            <Alert variant="danger" className="mb-3">
              Error: {error}
            </Alert>
          )}

          {/* ===== Input Section - default Bootstrap input style ==========*/}
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                placeholder="Enter task title"
                className="mb-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={todoDesc}
                onChange={(e) => setTodoDesc(e.target.value)}
                placeholder="Enter task description (optional)"
              />
            </Form.Group>

            {/* if Todo is Editing Then Show edit button , 
           if not then show default Add task button */}
            {editId ? (
              <Button
                variant="success"
                onClick={() => saveTodo(editId)}
                className="w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FaSave /> Update Task
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={addTodo}
                className="w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FaPlus /> Add Task
              </Button>
            )}
          </Form>

          {/*====== Todo List - added todos will show here ===== */}
          {/* ==== is loading then show loader ======= */}
          {isLoading ? (
            <div className="text-center py-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading todos...</p>
            </div>
          ) : (
            // All Todo's will show here
            <ListGroup>
              {todoList.length === 0 ? (
                <Alert variant="info" className="text-center">
                  No tasks yet. Add your first task!
                </Alert>
              ) : (
                todoList.map((task) => (
                  <ListGroup.Item
                    key={task._id}
                    className={`mb-2 border rounded ${
                      task.status === "completed" ? "bg-light" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="me-3">
                        <div className="d-flex align-items-center mb-1">
                          <h5
                            className={`mb-0 fw-bold ${
                              task.status === "completed"
                                ? "text-decoration-line-through text-muted"
                                : ""
                            }`}
                          >
                            {task.title}
                          </h5>
                          {/*== Complete or pending Badge - bootstrap default badge == */}
                          <Badge
                            bg={
                              task.status === "completed"
                                ? "success"
                                : "warning"
                            }
                            className="ms-2"
                          >
                            {task.status}
                          </Badge>
                        </div>
                        {task.description && (
                          <p className="mb-0 text-muted fw-medium">{task.description}</p>
                        )}
                      </div>

                      <div className="d-flex gap-2">
                        {/* ====== Status Updating Button - default buttons ===== */}
                        <Button
                          variant={
                            task.status === "completed"
                              ? "outline-danger"
                              : "outline-success"
                          }
                          size="sm"
                          onClick={() => changeStatus(task)}
                          className="d-flex align-items-center"
                          disabled={editId === task._id}
                        >
                          {task.status === "completed" ? (
                            <FaTimes />
                          ) : (
                            <FaCheck />
                          )}
                        </Button>

                        {/* ====== if Todo is editing then show the - Edit Button */}
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => editTodo(task)}
                          className="d-flex align-items-center"
                        >
                          <FaEdit />
                        </Button>

                        {/*======= Delete Button ==========*/}
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => deleteTask(task._id)}
                          className="d-flex align-items-center"
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoApp;
