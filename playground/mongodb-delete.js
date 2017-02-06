//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); //ES6 object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp2", (err, db) => {

    if (err) {

        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    /*db.collection("Todos").deleteMany({text: "Eat lunch"})
    .then((result) => {

        console.log(result);
    });*/


    /*db.collection("Todos").deleteOne({text: "Eat lunch"})
    .then((result) => {

        console.log(result);
    });*/


    /*db.collection("Todos").findOneAndDelete({completed: false})
    .then((result) => {

        console.log(result);

    });*/


    /*db.collection("Users").deleteMany({name: "Andrew"})
    .then((result) => {

        console.log(result);
    });*/

    db.collection("Users").findOneAndDelete({_id: new ObjectID("588602f2f05d0f17bca8e503")})
    .then((result) => {

        console.log(result);
    });

    //db.close();

});