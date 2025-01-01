let results = document.querySelector('#result');
let input = document.querySelector('#inputScore');
let button = document.querySelector('#Submit');

const body=document.querySelector('body')

button.addEventListener('click', function (e) {
    let score = parseInt(input.value);  
    
    if (isNaN(score)) {
        results.innerHTML = "Please enter a valid number for the score!!!";
    } else {
        Result(score);
    }
});

function Result(score) {
    if (score >= 80 && score <= 100) {
        results.innerHTML = "Your Result: First Class";
        // body.style.backgroundColor='green'
    } 
    else if (score >= 60 && score < 80) {
        results.innerHTML = "Your Result: Second Class";
        // body.style.backgroundColor='white'
    } 
    else if (score >= 40 && score < 60) {
        results.innerHTML = "Your Result: Pass, could be better...";
        // body.style.backgroundColor='yellow'

        
    } 
    else if (score > 100) {
        results.innerHTML = "Invalid Marks";
    } else {
        results.innerHTML = "Your Result: Fail, Jaa padhai kar...";
        // body.style.backgroundColor='red'
        
        
    }
}
