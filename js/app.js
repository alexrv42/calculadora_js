var Calculadora = {
	display : document.getElementById('display'),
	btnClear : document.getElementById('on'),
	btn0 : document.getElementById('0'),
	btn1 : document.getElementById('1'),
	btn2 : document.getElementById('2'),
	btn3 : document.getElementById('3'),
	btn4 : document.getElementById('4'),
	btn5 : document.getElementById('5'),
	btn6 : document.getElementById('6'),
	btn7 : document.getElementById('7'),
	btn8 : document.getElementById('8'),
	btn9 : document.getElementById('9'),
	btnDot : document.getElementById('punto')
}


Calculadora.btnClear.addEventListener('click', function(){clear()})
Calculadora.btn0.addEventListener('click', function(){append(0)})
Calculadora.btn1.addEventListener('click', function(){append(1)})
Calculadora.btn2.addEventListener('click', function(){append(2)})
Calculadora.btn3.addEventListener('click', function(){append(3)})
Calculadora.btn4.addEventListener('click', function(){append(4)})
Calculadora.btn5.addEventListener('click', function(){append(5)})
Calculadora.btn6.addEventListener('click', function(){append(6)})
Calculadora.btn7.addEventListener('click', function(){append(7)})
Calculadora.btn8.addEventListener('click', function(){append(8)})
Calculadora.btn9.addEventListener('click', function(){append(9)})
Calculadora.btnDot.addEventListener('click', function(){append('.')})



function clear ()
{
	display.innerHTML = '0'
}


function append(char)
{
	if (display.innerHTML.length == 8)  // para no superar 8 caracteres
	{
		return;
	}
	if (display.innerHTML == '0' && char != '.') // para no agregar más ceros
	{
		display.innerHTML = ''
	}
	if (char == '.' && display.innerHTML.indexOf('.') != - 1) // para no repetir puntos
	{
		return;
	}
	display.innerHTML = display.innerHTML + char;
}