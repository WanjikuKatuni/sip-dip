//prevent default event listener
// document.getElementById('searchbtn').addEventListener('submit',
//     function(event){
//         event.preventDefault()
//     });


let result = document.getElementById('cocktailcards');
let searchBtn = document.getElementById('searchbtn');
let url ='https://thecocktaildb.com/api/json/v1/1/search.php?s=';

let userInput = document.getElementById('name').value;
if (userInput.length == 0){
    alert `The search input field cannot be empty`;
}
else{
    fetch(`${url}${userInput}`)

    .then((res => res.json))
    .then((data)=> console.log(data))
}