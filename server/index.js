require("dotenv").config();
const path = require("path");
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors(
    {
        origin: ["https://mern-test-client-phi.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



app.get('/', (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email, 
        bio: req.body.bio})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res)=> {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))   
})

app.post("/createUser", (req, res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log('Server is running')
})
