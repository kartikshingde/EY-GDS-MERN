const operations=require("./operations.js")

const fs=require("fs")

fs.writeFileSync("example.txt","Hello Node @SK!!")
const result=fs.readFileSync("example.txt","utf-8")
//utf-8 used to read encrypted file in Strings
// console.log(result)

 


 