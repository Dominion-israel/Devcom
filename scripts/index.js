document.querySelector('.js-submit-button1')
	.addEventListener('click', () => {
		displayAlert();
		changeText();
	});



	const buttonElem = document.querySelector('.js-submit-button1');

	function displayAlert() {
		alert('You have Submitted a form.')
	}

	/*
	function conditionForToggle() {


		buttonElem.classList.add('is-clicked');

		if(!buttonElem.classList.contains('is-clicked')) {
			buttonElem.classList.add('is-clicked');
		} else {
			buttonElem.classList.remove('is-clicked');
		}
	
	return;

}

*/

function changeText() {
	buttonElem.innerHTML = 'SUBMITTED';

	buttonElem.classList.add('is-clicked');

		if(!buttonElem.classList.contains('is-clicked')) {
			buttonElem.classList.add('is-clicked');
		} else {
			buttonElem.classList.remove('is-clicked');
		}

		return;
}

function generateWordCount() {


const textAreaElem1 = document.querySelector('.js-textarea1');

let words = textAreaElem1.innerText;

let wordCount = words.length;

let result = Number(200 - wordCount);

document.querySelector('.js-word-count').innerHTML = `You have written ${wordCount} words and have ${result}`;

}

document.querySelector('js-textarea1')
	.addEventListener('onkeyup', ()=> {
		generateWordCount();
	})