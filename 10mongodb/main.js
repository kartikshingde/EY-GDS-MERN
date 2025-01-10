
const express=require('express')
const app=express()
const PORT=4000
const mongoose=require('mongoose')
app.use(express.json())

const MONGOURL="mongodb+srv://kartik:Kartik123@eygds.4kvnu.mongodb.net/EYGDS"

mongoose.connect(MONGOURL,
    ).then(()=>{
    console.log("mongo db connected successfully")
})

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

const userModel=mongoose.model("users",userSchema)      //user Model

app.post('/adduser',(req,res)=>{
    const name=req.body.name
    const age=req.body.age
    const email=req.body.email
    const user=userModel({
        name:name,
        age:age,
        email:email
    })
    user.save().then(()=>{
        res.send("user added")
    })
    res.send(`name is ${name}, age is ${age} and email is ${email}`)
})


app.get('/',(req,res)=>{
    res.send("<h1>Hello Mongo!</h1>")
})


app.listen(PORT,()=>{
    console.log(`Port is running at port ${PORT}`)
})