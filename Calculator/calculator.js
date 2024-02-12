 document.addEventListener('DOMContentLoaded', function() {
	const display = document.querySelector('.display');
	const buttons = [
		'7', '8', '9', '/',
		'4', '5', '6', '*',
		'1', '2', '3', '-',
		'0', '.', 'C', '+', '='
	];

	buttons.forEach(button => {
		const btn = document.createElement('button');
		btn.textContent = button;
		document.querySelector('.buttons').appendChild(btn);
	});

	document.querySelector('.buttons').addEventListener('click', function(e) {
		if (e.target.tagName === 'BUTTON') {
			switch (e.target.textContent) {
				case 'C':
					display.value = display.value.slice(0, -1);
					break;
				case '=':
					try {
						display.value = eval(display.value);
					} catch (error) {
						display.value = 'Error';
					}
					break;
				default:
					display.value += e.target.textContent;
					break;
			}
		}
	});
}); 