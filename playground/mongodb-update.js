//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); //ES6 object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp2", (err, db) => {

    if (err) {

        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    /*db.collection("Todos").findOneAndUpdate(
        {_id: new ObjectID("58888ba952406eda7536bc93")}, 
        {$set: {completed: true}},
        {returnOriginal: false})
    .then((result) => {

        console.log(result);
    });*/


    db.collection("Users").findOneAndUpdate(
        {_id: new ObjectID("5887692cd492271780531c16")},
        {
            $set: {name: "Jen"},
            $inc: {age: 1}
        },
        {returnOriginal: false})
    .then((result) => {

        console.log(result);
    });


    //db.close();

});