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
    // console.log(`${url}${userInput}`)
    fetch(`${url}${userInput}`)

    .then((res) => res.json())
    .then((data)=> {
        console.log(data)
        console.log(data.drinks[0])
        let myDrink = data.drinks[0];
        console.log(myDrink.strDrink)
        // console.log(myDrink.strDrinkThumb)
        // console.log(myDrink.strIngredient1)

        let count = 1
        let ingredients = []
        for (let i in myDrink){
            let ingredient="";
            let measure =""
            if (i.startsWith("strIngredient") && myDrink[i]){
                ingredient = myDrink[i];
                if (myDrink[`strMeasure${count}`]){
                    measure = myDrink[`strMeasure${count}`]
                }
                else {
                    measure=  ""
                }
                count += 1;
                ingredients.push(`${measure} ${ingredient}` )
            }
        }
    });
}