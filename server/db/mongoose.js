var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://simao:lozinka25@ds139969.mlab.com:39969/todoappdb-api"  || "mongodb://localhost:27017/TodoApp");

module.exports = { mongoose };