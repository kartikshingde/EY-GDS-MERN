//*********Variables and Data Types*********//

// number =>1,2,...etc
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object


const student={
    fullName:"kartik",
    age:20,
    cgpa:9.14,
    isPass:true,

};
// console.log(student.cgpa)
// console.log(student ["cgpa"])
// student.fullName="Kartik Shingde"
// console.log(student.fullName)
const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:100,
};
profile={           //object=> key:value  pair 
    fullName:"Kartik Shingde",
    posts:190,
    isFollow:true,
    
    
};
// let a=true
// console.log(typeof a);
// console.log(typeof isFollow);


let numArr=[4,9,7,3,4,6];

// for(let i=0;i<numArr.length;i++){
//     // alert("hello")
//     console.log(numArr[i]);
    
// }



// read Array Methods from MDN or w3school Docs...


function getSquare(intArr){
    let resultArr=[]
    for(let j=0;j<intArr.length;j++){
        resultArr.push(intArr[j]*intArr[j]);

    }
    console.log(resultArr);
}
getSquare(numArr)

let nameArr=["a","b","c","d","e"]


// a function which takes another function as parameter is called  //Higher Order Fn

//Which goes as parameter is Callback Function.

// nameArr.forEach((item)=>{
//     console.log(item);
    
// })

console.log(b);
//Hoisting-> Declaring all variables at starting as undefined..i.e. No error//
var b=10;

//Closures In JS ==> Lexical Scoping
let a=10;
const sum=()=>{
    let a=20;
    console.log(a);
    
}
sum()
console.log(a);

const studentData=[
    {
        name:"Kartik",
        age:21,
        email:"sk@email.com"
    },
    {
        name:"Pratik",
        age:17,
        email:"pk@email.com"
    },
    {
        name:"Prajwal",
        age:21,
        email:"pg@email.com"
    },
    {
        name:"Rohan",
        age:15,
        email:"rt@email.com"
    }
    
]

// studentData.forEach((item)=>{                //FOREACH FUNCTION
//     console.log(item.name,item.age);
// })

console.log(studentData);

// let adults=studentData.filter((item)=>{         //FIlTER FUNCTION
//     return item.age>18 && item.email !== "sk@email.com";
// })
// console.log(adults)


//API fetch from jsonplaceholder...
// async function getData(){
//     const data=await fetch('https://jsonplaceholder.typicode.com/posts')
//     let result=await data.json()
//     console.log(result);

// }
// getData()




async function todoData(){
    const data=await fetch('https://jsonplaceholder.typicode.com/todos')
    const demoData=await data.json()
    console.log(demoData);
    
}
todoData()




