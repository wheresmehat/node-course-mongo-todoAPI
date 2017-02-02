const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var todoId = '5893333c4af95df00ad789d5';

if (!ObjectID.isValid(todoId)) {

    console.log("ID not valid");
}

Todo.find({
    _id: todoId
})
.then((todos) => {

    console.log("Todos", todos);
});

Todo.findOne({
    _id: todoId
})
.then((todo) => {

    console.log("Todo", todo);
});

Todo.findById(todoId)
.then((todo) => {

    if (!todo) {

        return console.log("ID not found");
    }

    console.log("Todo by ID", todo);
})
.catch((err) => {

    console.log("Error happened", err);
});


var userId = "5890a0a85d047e441515bb48";

User.findById(userId)
.then((user) => {

    if (!user) {

        return console.log("No user with that ID");
    }

    console.log("User", JSON.stringify(user, undefined, 2));
})
.catch((err) => {

    console.log("Error happened", err);
});

