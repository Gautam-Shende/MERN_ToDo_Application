👨‍💻 Gautam Shende, MERN stack

📧 gautamshende14@gmail.com

# Assignment 7: Identifying APIs for To-Do List App

🌐 go Live :- https://mern-todo-application-akvu.onrender.com/

Project Overview 🚀
This project is a To-Do List application, The User will manage our task To Do , Complete the task (mainly user task create/add karega “api/todos/”) User created Todo task successfully.Then “api/todos” route fetch the task from database. (task aoutomatically show Honge “/” home page pe jyese hi user new todo add krega).

Required API’s for To-Do List App 🔧

# 1) Add Task/Todo API ➕
EndPoint :- POST /api/todos/

For creating/adding the task the POST “/api/todos/” (CURD) Api is required for adding the Todo’s , its help to save task/todo directly at mongodb database.

Request in JSON format :-
{
"title": "MERN Assignment 7",
“description”: “ Identify the Todo API’s”
"status": “pending”
}

Response Example :-
{
"id": "12345", // todo id
"title": "Complete Assignment", // todo title
"status": “pending” // todo’s complete or pending , default false
}

This POST “api/todos/” routing of Nodejs CURD Method. Helps to add Task at the mongodb database (ye api frontend me axios ka use kar ke “createTodo” function ko Add todo button ke through use kiya hai)

1) Model.js Create kiya :- For Todo/task Schema 📂

2) TodoController.js Create kiya :- Todo/task key controller function (getTodo, createTodo, updateTodo, deleteTodo) function banaya. ⚙️

3) TodoRoutes.js Create kiya :- Todo/task ko CURD method use krke safe routing create kiya. 🔗

4) TodoApp.jsx frontend ko Create kiya :- frontend me “addtodo” function bnanya or use home “/” default add kiya.



# 2) Get All Tasks API 📋
EndPoint :- GET /api/todos
Fetching the all Todos/task using GET “/api/todos”

Response in JSON format :-

[
{
"id": "1", // id of todo
"title": "Buy groceries", // todo title
"status": “pending” // todo’s complete or pending , default false
},
{
"id": "2",
"title": "Study React",
"status": “completed”
}
]

This GET “/api/todos/” (CURD) Method. Helps to Fetch all todo’s/task’s at the web page. Form added todo’s mongodb database . (ye api frontend me axios ka use kar ke “getTodos” home “/” routing ko add kiya.

1) Model.js Create kiya :- For Todo/task Schema 📂

2) TodoController.js Create kiya :- Todo/task key controller function (getTodo, createTodo, updateTodo, deleteTodo) function banaya. ⚙️

3) Todoroutes.js Create kiya :- Todo/task ko CURD method use karke safe routing create kiya. 🔗

4) TodoApp.jsx frontend ko Create kiya :- frontend me “getTodo” function bnanya or use home “/” me dal diya 💻

# 3) Update Task API ✏️
EndPoint :- PUT /api/todos/:id

For Updating the task the PUT “/api/todos/:id” (CURD) Api is required for Updating the Todo’s , its help to Updating the todo from todo “id” directly at mongodb database.

Request Body Example:
{
"description": "MERN Assignment 7 is Completed",
"status": “completed”
}

Response Example :-
{
"message": "Task updated successfully"
}

This PUT “/api/todos/:id” (CURD) Method. Helps to Update any todo’s/task’s Form the todo/task “id” . (ye api frontend me axios ka use kar ke “updateTodos” “/” routing ko add kiya.

1) Model.js Create kiya :- For Todo/task Schema 

2) TodoController.js Create kiya :- Todo/task key controller function (getTodo, createTodo, updateTodo, deleteTodo) function banaya. ⚙️

3) Todoroutes.js Create kiya :- Todo/task ko CURD method use karke safe routing create kiya. 🔗

4) TodoApp.jsx frontend ko Create kiya :- frontend me “editTodo” function bnanya.and and usme backend ka “updateTodo” controller function ko implement kiya.
and “saveTodo” function me “updateTodo” id , title, and description update krne ka method return kiya. 💻

# 4) Delete Todo/Task API ❌
EndPoint :- DELETE /api/todos/:id

For Deleting the task the DELETE “/api/todos/:id” (CURD) Api is required for Deleting the Todo’s , its help to Deleting the todo from todo “id” directly at mongodb database.

Response Example:
{
"message": "Task deleted successfully"
}

This DELETE “/api/todos/:id” (CURD) Method. Helps to Delete any todo’s/task’s Form the todo/task “id” . (ye api frontend me axios ka use kar ke “deleteTodos” “/” routing ko add kiya.

1) Model.js Create kiya :- For Todo/task Schema 📂

2) TodoController.js Create kiya :- Todo/task key controller function (getTodo, createTodo, updateTodo, deleteTodo) function banaya. ⚙️

3) Todoroutes.js Create kiya :- Todo/task ko CURD method use karke safe routing create kiya. 🔗

4) TodoApp.jsx frontend ko Create kiya :- frontend me “deleteTodo” function bnanya.and and usme backend ka “deleteTodo” controller function ko implement kiya.
And deleteTodo function ko Delete button me add kiya. 💻


# The given API’s perform CRUD operations:

The given API’s perform CRUD operations:

API          Operation
Create       Add Task API
Get          Read Tasks API
Update       Update Task API
Delete       Delete Task API


# These operations allow full management of tasks inside the To-Do application.

# Todo Application API Working Flow 

User adds task from frontend. 

Frontend sends request to backend API. 

Backend processes request and stores data in mongodb database. 

Backend sends response back to frontend. 

Frontend updates UI. 

# Challenges I Faced 

When i Write Backend code of This ToDo API .

Making ToDo Schema using Mongoose Schema 

Proper Todo title, description, status=completed or pending , i make status enum “completed” or “pending” by default “pending”( enum value samajh nhi aa rhi thi, web se info nikali or use kiya)

Creating the proper controller system for todomodel 

I created the Todo/task controller function (getTodo, createTodo, updateTodo, deleteTodo) ( ye sare function create krne ke liye proper req, res use kyese kre ye thoda difficult lga)

The Fetching the Todo API’s from the backend in fronten 

I used axios for fetching the backend API’s for creating the proper route in frontend. (mene jab frontend me access krne ki koshish ki to bht se error’s aa rage the proper api andpoitn create krte time)

Deploying the Backend and Frontend at web page 🚀

I faced so many error’s when i deploying the backend code on render , 1) api’s is not valid, 2) run command in package.json , 3) main root directory , etc problem i faced . ( ye sare problem’s mene backend ko deploy krne me face kiye,)
