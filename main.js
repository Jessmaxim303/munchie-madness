var addSnackButton = document.getElementById('add__snack--button');
var groceryList = document.querySelector('.grocery-list');
var snackDesc = document.getElementById('snack-desc');
var snackTitle = document.querySelector('.snack__title');

addSnackButton.addEventListener('click', snackCard);

function snackCard(e){
	console.log('hi');
	e.preventDefault();
	// groceryList.innerText = "hi";
 groceryList.insertAdjacentHTML('afterbegin',
 `<section class="munchie__card">
 <h1 id="snack__title--h1"> 
 	${snackTitle.value}
 </h1>
 <textarea id="snack__textarea">
 ${snackDesc.value}
 </textarea>
 <button id="delete__button"></button>
 </section>`)
}

//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled

