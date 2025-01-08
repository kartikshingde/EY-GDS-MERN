const http=require('http')
const {url}=require('inspector')

const PORT=5000;
// console.log(http)

const server=http.createServer((req,res)=>{

    // console.log(req.url)
    // console.log(req.method)

    if(req.url==='/about' && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/plane'})
        res.end("hello from /about")
    }else if(req.url==='/contact' && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/plane'})
        res.end("hello from /contact")}
        
    else{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("hello node!!")
    }


    // res.writeHead(200,{'content-Type':'text/plain'})
    // res.end('Hello World\n')

})

server.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
    
})




