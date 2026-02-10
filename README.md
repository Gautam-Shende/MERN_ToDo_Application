👨‍💻 Gautam Shende, MERN stack

📧 gautamshende14@gmail.com

📌 Assignment 7: Identifying APIs for To-Do List App

🌐 go Live :- https://mern-todo-application-akvu.onrender.com/

🧾 API Planning for To-Do List App

The objective of this assignment is to identify and plan the necessary APIs required for a To-Do List application. These APIs will support all core functionalities of the app with containing the creating, reading, updating, and deleting tasks (CRUD operations). All This Operations.

The focus is on designing RESTful APIs, not implementing them.

📖 Overview of the To-Do List App

The To-Do List app allows users to:
✅ Add Task (new tasks)
✅ View all tasks
✅ View a single task
✅ Update task details or status
✅ Delete tasks

Each task contains information such as title, description, status, and timestamps.

🌍 Base API URL
https://api.todoapp.com/api/tasks

🆕 1. Add Task (Create a new Task)
📍 Endpoint
POST /api/tasks

🎯 Purpose

To create and store a new task in the system.
Creating with title, description, and status

🔧 HTTP Method

POST

📤 Request Body // Model of request body
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending"
}

📝 Request Body Explanation

title: Name of the task , which task user wants to do
description: Additional details about the task
status: Current task status (pending or completed)

🆔 Unique ID Logic

The server generates a unique task ID automatically.
Auto-increment ID (database)

📥 Expected Response
{
  "id": "123", // a random id getting from the server response
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending",
  "createdAt": "2026-01-31T10:00:00Z" // by default
}

💡 Reasoning

POST is used for creating or adding something new in a database or server.
The server controls ID creation to avoid duplicates.

📋 2. Get All Tasks (Read All Tasks)
📍 Endpoint
GET /api/tasks

🎯 Purpose

To fetch and access all tasks stored in the system.

🔧 HTTP Method

GET

📤 Request Body

None , because we are trying to fetch the data, not uploading or creating

📥 Expected Response
[
  {
    "id": "123",
    "title": "Buy groceries",
    "status": "pending"
  },
  {
    "id": "124",
    "title": "Complete assignment",
    "status": "completed"
  }
]

💡 Reasoning

GET is used to getting or accessing the data from the database or system .

🔍 3. Get Single Task (Read One Task)
📍 Endpoint
GET /api/tasks/{id}

🎯 Purpose

To access and fetch the details of a specific task using its ID.

🔧 HTTP Method

GET

🔑 URL Parameter

id: Unique task identifier

📥 Expected Response
{
  "id": "123",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending"
}

💡 Reasoning

This allows fetching a single resource in a data system .

✏️ 4. Update Task (Update Task Details or Status)
📍 Endpoint
PUT /api/tasks/{id}

🎯 Purpose

To update an existing task , with the Task ID

🔧 HTTP Method

PUT

📤 Request Body
{
  "title": "Buy groceries",
  "status": "completed"
}

📥 Expected Response
{
  "id": "123",
  "title": "Buy groceries",
  "status": "completed",
  "updatedAt": "2026-01-31T11:00:00Z"
}

💡 Reasoning

PUT is used for updating the any changes at dada of the system,

🗑️ 5. Delete Task (Delete Task)
📍 Endpoint
DELETE /api/tasks/{id}

🎯 Purpose

To delete a task permanently. With the help of task ID

🔧 HTTP Method

DELETE

📤 Request Body

None

📥 Expected Response
{
  "message": "Task deleted successfully"
}

💡 Reasoning

DELETE is used for deleting any data from the database or system directly with data ID.

📊 CRUD Operations Summary
Operation	API Endpoint	HTTP Method
Create	/api/tasks	POST
Read (All)	/api/tasks	GET
Read (One)	/api/tasks/{id}	GET
Update	/api/tasks/{id}	PUT
Delete	/api/tasks/{id}	DELETE

These APIs together fully support CRUD operations for the To-Do List app.

🔄 How These APIs Work Together

⚛️ React frontend sends requests to these APIs.
⚙️ APIs handle task data operations.
📦 The server responds with JSON data.
🖥️ Frontend updates UI based on responses.
🧪 We can check this API’s with the help of a postman or thunder client .

⚠️ The Challenges i Phased to building This To Do Application Backend API’s
🧭 Understanding API Routes

In the beginning, it was confusing to understand which route should be used for getting, creating, updating, and deleting todos. Sometimes I used the wrong method or route.

🛑 User Input Validation

When users sent empty or incorrect data, the API showed errors. Later, I understood that checking the data before saving it is very important.

⏳ Handling Async and Await

At first, it was difficult to understand async and await. Sometimes I forgot to use await, and the API did not return the correct response.

🔗 Frontend and Backend Connection Issues

While connecting the frontend with the backend, I faced problems like CORS , Axios errors and wrong API URLs. Because of this, the data was not loading properly.

🧪 API Testing

I had to test every API using Postman. Some APIs worked while others did not, and finding the issue took time.

🚨 Error Handling

It took time to understand how to send proper error messages and status codes. In the beginning, the server showed errors but did not clearly explain the problem.

🚀 Deploying Backend & Frontend

It very difficult to deploy backend and frontend on render , i tried in vercel but it giving so many error’s, so I used render , but I'm still getting errors. Then I get help from chat gpt to fix the errors . and finally I successfully deployed my backend and frontend .
