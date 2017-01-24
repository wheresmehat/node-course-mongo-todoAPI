//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); //ES6 object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {

    if (err) {

        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    /*db.collection("Todos").find({_id: new ObjectID("58876519c286f1c0bf3e8acb")}).toArray()
    .then(
        (docs) => {

        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {

        console.log("Unable to fetch todos", err);
    });*/


    /*db.collection("Todos").find().count()
    .then((cnt) => {

        console.log("Todos count:", cnt);
        

    }, (err) => {

        console.log("Unable to fetch todos", err);
    });*/


    db.collection("Users").find({name: "Andrew"}).toArray()
    .then((docs) => {

        console.log("Users:");
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {

        console.log("Unable to fetch users", err);
    });

    //db.close();

});