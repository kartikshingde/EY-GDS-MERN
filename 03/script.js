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
let a=true
console.log(typeof a);
console.log(typeof isFollow);


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

