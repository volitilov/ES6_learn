// переменная let видна только в пределах блока кода,
// тоесть в фигурных скобках

// нельзя использовать let до её объявления 

var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
	var button = buttons[i];

	button.innerText = i;

	button.onclick = function(e) {
		console.log(i);
	}
}