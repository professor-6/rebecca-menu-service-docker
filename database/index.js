const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/menus", { useNewUrlParser: true })
.then(() => console.log('Connected'))
.catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
