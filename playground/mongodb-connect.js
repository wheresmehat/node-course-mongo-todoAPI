//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); //ES6 object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp2", (err, db) => {

    if (err) {

        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    /*db.collection("Todos").insertOne({

        text: "Something to do",
        completed: false

    }, (err, result) => {

        if (err) {

            return console.log("Unable to insert todo", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });*/

    db.collection("Users").insertOne({

        name: "Andrew",
        age: 25,
        location: "USA"

    }, (err, result) => {

        if (err) {

            return console.log("Unable to insert user", err);
        }

        console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();

});