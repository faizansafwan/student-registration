// imports
const express = require('express')
const  app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const AdminModel = require('./models/Register')
const StudentModel = require('./models/RegisterStudent')


// Connect Server with mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/studentdb')

app.use(express.json())
app.use(cors())

// Login request
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    AdminModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('Success')
            } else {
                res.json("The Password is incorrect")
            }
        } else { 
            res.json('No record exist')
        }
    })
})

// Form Signup request
app.post('/register', (req,res) => {
    AdminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})

// Form Student register Request
app.post('/add', (req,res) => {
        StudentModel.create(req.body)
        .then(student => res.json(student))
        .catch(err => res.json(err))
    
})

// Access student data request
app.get('/dashboard', (req, res) => {
    StudentModel.find({})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

// Server get data by ID for update
app.get('/update/:ids', (req, res) => {
    const ids = req.params.ids
    StudentModel.findById({_id:ids})
    .then( students => res.json(students))
    .catch(err => res.json(err))
})

//  update the data on server side
app.put('/update/:ids', (req,res) => {
    const ids = req.params.ids;
    StudentModel.findByIdAndUpdate({_id:ids}, {
        id:req.body.id, 
        name:req.body.name, 
        age:req.body.age, 
        status:req.body.status})
    .then( students => res.json(students))
    .catch(err => res.json(err))
})

// delete data on server side
app.delete('/delete/:ids', (req,res) => {
    const ids = req.params.ids
    StudentModel.findByIdAndDelete({_id: ids})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


const port = 2700;
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})