const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", schema);

module.exports = User;