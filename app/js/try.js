//event listener
document.querySelector('#searchform').addEventListener('submit', handleSearch)

function handleSearch(e){
    e.preventDefault()


    let drinkObj = {
        strDrink: e.target.name.value
    }
    renderDrink(drinkObj)
}


//dom renderers

function renderDrink(drink){

    let card= document.createElement ('li')
    card.className = 'card'
    card.innerHTML = 
    `<img id="card-img" src="${drink.strDrinkThumb}"class="card-img-top img-fluid" alt="...">
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      ${drink.strDrink}
    </button> 
    <!-- modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" id="modal">
        <div class="modal-content">
          <div class="modal-body">
            <img src="/app/images/iconmodal.png" class= "img-fluid" alt="iconmodal">
            <div>
              <h5>${drink.strDrink}</h5>
              <ul id="ingredient-list">
                <li>${drink.strIngredient1}</li>
                <li>${drink.strIngredient2}</li>
                <li>${drink.strIngredient3}</li>
              </ul>
            </div>
          </div>                       
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`



    //add card to dom
    document.querySelector('#cocktailcards').appendChild(card)
}


function getSearchedDrink(strDrink){
    fetch (`http://thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`,{
        'Access-Control-Allow-Origin': 'www.thecocktaildb.com',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allowheaders':{
            'Content-Type': 'api/json',
            Accept: "api/json",
          

        },
        // body: JSON.stringify(drinkObj)

    })
        .then(res=>res.json())
        .then(drinkData => console.log(drinkData))
}


// 

//initialize
function initialize(){
    getSearchedDrink()
}
initialize()