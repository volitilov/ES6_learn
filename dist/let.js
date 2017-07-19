'use strict';

// переменная let видна только в пределах блока кода,
// тоесть в фигурных скобках

// нельзя использовать let до её объявления 

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
	button = buttons[i];


	button.innerText = i;

	button.onclick = function (e) {
		console.log(i);
	};
};

for (var i = 0; i < buttons.length; i++) {
	var button;

	_loop(i);
}