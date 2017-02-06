const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

/*Todo.remove({})
.then((result) => {

    console.log(result);
});*/

//Todo.findOneAndRemove

Todo.findByIdAndRemove("589883ea467e2de1b008f5fa")
.then((docs) => {

    console.log(docs);
});

