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
        console.log(ingredients)
        // results
        result.innerHTML = `
        
        <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" id="cocktailcards">
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
                        <h5>Ingredients</h5>
                        <ul id="ingredient-list">
                          
                        </ul>
                        <p class=instructions>${myDrink.strInstructions}</p>
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

    });
}