const express=require('express')

const app=express()
// app.use(express.json())

const PORT=5000

app.get('/',(req,res)=>{
    res.send("Hello!!")
    
})
app.get('/heading',(req,res)=>{
    
    res.send("<h1>Hello Express!!!</h1>") 

})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})