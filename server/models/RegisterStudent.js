const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    status: String
});

const StudentModel = mongoose.model("student", StudentSchema)

module.exports = StudentModel;