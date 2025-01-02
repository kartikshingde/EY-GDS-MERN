const button=document.getElementById('button')
const body=document.getElementById('body')
const text=document.getElementById('message')

button.addEventListener('click',()=>{

    // body.style.backgroundColor='white';.
    text.textContent="You just clicked button";
    // text.innerHTML="Bye"
    text.style.color='red'

})
button.addEventListener('dblclick',()=>{

    text.textContent="You doubleClicked Button !!!"

    text.style.color='green'
})

function getData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => resolve(json));
    });
}   
getData().then((data)=>console.log(data))
