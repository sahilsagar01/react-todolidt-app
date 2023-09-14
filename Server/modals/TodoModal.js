const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo: String,
    date: String,
    isDone: Boolean
})

const Modal = mongoose.model("Todo" , TodoSchema);

module.exports = Modal;