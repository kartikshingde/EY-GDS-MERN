const express=require('express')
const app=express()

const PORT=5000
app.use(express.json())

app.post("/userInfo",(req,res)=>{
    
    const name=req.body.name
    const city=req.body.city
    res.send(`Hii My name is ${name} and I'm From ${city}`)

     
})


app.get('/',(req,res)=>{
    res.send("<h1>Go to code and write routes</h1>") 
    
})

function isAdult(req,res,next){         //Middleware-It is a helper function 
    let age=req.params.userAge;
    if(age>18){
        next();
    }
    else{
        res.send("<h1>You Can't Party</h1>")
    }
}

app.get('/users/age/:userAge',isAdult,(req,res)=>{
    res.send("<h1>You Can Party</h1>")
})

app.post('/studentInfo',(req,res)=>{
    let result=req.query;
    let name=req.query.name;
    let age=req.query.age;
    res.send(`My name is ${name} and age is ${age} and year is ${req.query.year}`)
    // res.send(JSON.stringify(result)) 
})


app.get('/users/:userName',(req,res)=>{
    const result=req.params.userName
    res.send(`<h1>Hello ${result} , Welcome to Club!</h1>`)
})

// app.get('/heading',(req,res)=>{ 
//     res.send("<div><img src='https://images.unsplash.com/photo-1710867753541-101b8da10add?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWl0fGVufDB8fDB8fHww' alt='image' style=height:200px ><h1>This is Image</h1></div>") 
// })







app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})