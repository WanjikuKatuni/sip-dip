// prevent default event listener
document.getElementById('searchform').addEventListener('submit',
    function(event){
        event.preventDefault()
    });


let result = document.getElementById('cocktailcards');
let searchBtn = document.getElementById('searchbtn');
let url ='https://thecocktaildb.com/api/json/v1/1/search.php?s=';


let getCocktailInfo = () => {


let userInput = document.getElementById('name').value;
// if (userInput.length == 0){
//     alert `The search input field cannot be empty`;
// }
// else{
    
    // console.log(`${url}${userInput}`)
    fetch(`${url}${userInput}`)

    .then((res) => res.json())
    .then((data)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = data.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
    .catch(()=>{
        result.innerHTML = `<h3>Please enter a valid input. Preferrably a type of cocktail</h3>`
    })
//  }
}


function getNonAlcoholic (){
    fetch ('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then((nonAlcoholicData)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = nonAlcoholicData.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
}


function getAlcoholic (){
    fetch ('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(res => res.json())
    .then((alcoholicData)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = alcoholicData.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
}
function getRandom (){
    fetch ('https://thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then((randomData)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = randomData.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
}
function getGlass (){
    fetch ('https://thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    .then(res => res.json())
    .then((glassData)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = glassData.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
}
function getFlute (){
    fetch ('https://thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
    .then(res => res.json())
    .then((fluteData)=> {
        // console.log(data)
        // console.log(data.drinks[0])
        let myDrink = fluteData.drinks[0];
        // console.log(myDrink)
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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
                <div class="row">
                <div class="col">
                <div class="card border-warning">
                    <img id="card-img" src="${myDrink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ${myDrink.strDrink}
                    </button> 
                    <!-- modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" id="modal">
                        <div class="modal-content">
                            <div class="modal-body">
                            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
                            <div>
                                <h2>${myDrink.strDrink}</h2>
                                <img id="modal-img" src="${myDrink.strDrinkThumb}" class="img-fluid" alt="...">
                                <h5 class="leftindent">Ingredients</h5>
                                <ul class="leftindent" id="ingredient-list">
                                
                                </ul>
                                <h5 class="leftindent">Instructions</h5>
                                <p class="leftindent">${myDrink.strInstructions}</p>
                            </div>
                            </div>                       
                            <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        `

        let ingredientList = document.querySelector('#ingredient-list');
        ingredients.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            ingredientList.appendChild(listItem)
        })

    })
}


//event listener
// window.addEventListener('load', getCocktailInfo)
document.querySelector('#searchform').addEventListener('submit', getCocktailInfo)
document.querySelector('#alcohol').addEventListener('click', getAlcoholic)
document.querySelector('#nonalcoholic').addEventListener('click', getNonAlcoholic)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('#glass').addEventListener('click', getGlass)
document.querySelector('#flute').addEventListener('click', getFlute)