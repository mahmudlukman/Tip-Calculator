const form = document.querySelector("#form");
const feedback = document.querySelector(".feedback");

const calcTip = (e) => {
	e.preventDefault()

	const cost = form.cost.value;

	let tip = (+cost * 0.05).toFixed(2);
	let temp = `The tip for ₦${cost} shoud be ₦${tip}`;
	feedback.innerText = temp;
}


form.addEventListener('submit', calcTip);