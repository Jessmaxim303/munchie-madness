var addSnackButton = document.getElementById('add__snack--button');
var groceryList = document.querySelector('.grocery-list');
var snackDesc = document.getElementById('snack-desc');
var snackTitle = document.querySelector('.snack__title');

addSnackButton.addEventListener('click', snackCard);
groceryList.addEventListener('click', noteCardEvent);
snackTitle.addEventListener('keyup', buttonActiveState);

function snackCard(e){
	console.log('hi');
	e.preventDefault();
console.log('Snack Card');
 groceryList.insertAdjacentHTML('afterbegin',
 `<section class="munchie__card">
 <h1 class="snack__title--h1"> 
 	${snackTitle.value}
 </h1>
 <h3 class="snack__item--text">
 ${snackDesc.value}
 </h3>
 <img class="delete__button" src="images/delete.svg">
 </section>`)
 	clearForms()
}

function noteCardEvent(e){
	if(e.target.classList.contains("delete__button")){
		e.target.parentNode.remove();
	}
	if(e.target.classList.contains("snack__title--h1")){
		console.log('Snack title!');
		e.target.remove();	
	}
}

function changeTitle(){
 	if(e.target.classList.contains("snack__title--h1")){
		e.target.remove();
		groceryList.insertAdjacentHTML('afterbegin',
    `<input class="new__title">
    </input>
    `)}
}

function buttonActiveState(e){
	console.log('function connention')
	addSnackButton.disabled = false;
}

function clearForms(){
	snackTitle.value = '';
	snackDesc.value = '';
	snackTitle.placeholder = 'Enter snack item here...';
	snackDesc.placeholder = 'Add snack info here!';
	addSnackButton.disabled = true;
}

//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!

//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled

