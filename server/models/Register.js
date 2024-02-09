const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    conPassword: String
});

const StudentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    status: String
});

const AdminModel = mongoose.model("admin", AdminSchema)


module.exports = AdminModel;
