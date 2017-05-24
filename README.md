# node-course-mongo-todoAPI
node and mongoDB todoApp from The Complete Node.js Developer Course on Udemy

deployed on Heroku:

https://cryptic-basin-18251.herokuapp.com/users/login

https://cryptic-basin-18251.herokuapp.com/todos

Login:

POST request to /users/login with email and password in request body
{
  "email": "someemail@mail.com",
  "password": "somepassword"
}


Save todo:

POST request to /todos with new todo in text property
{
  "text": "Some new todo"
}

Get todos:

GET request to /todos
https://cryptic-basin-18251.herokuapp.com/todos

Update todo:

PATCH request to /todos/:id with the id of the todo to update


Delete todo:

DELETE request to /todos/:id with the id of the todo to delete
