var Calculadora = {
	op1 : null,
	op2 : null,
	primeraVez : true,
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
	btnDot : document.getElementById('punto'),
	btnMas : document.getElementById('mas'),
	btnMenos : document.getElementById('menos'),
	btnPor : document.getElementById('por'),
	btnDiv : document.getElementById('dividido'),
	btnSigno : document.getElementById('sign'),
	btnIgual : document.getElementById('igual'),
	append : function (char) 
	{
		if (!Calculadora.primeraVez)
		{
			Calculadora.clear()
			Calculadora.append(char);
			return;
		}
		console.log('boton pressed')
		if (Calculadora.display.innerHTML.length == 8)  // para no superar 8 caracteres
		{
			return;
		}
		if (Calculadora.display.innerHTML == '0' && char != '.') // para no agregar más ceros
		{
			Calculadora.display.innerHTML = ''
		}
		if (char == '.' && Calculadora.display.innerHTML.indexOf('.') != - 1) // para no repetir puntos
		{
			return;
		}
		Calculadora.display.innerHTML += char;
	},
	clear : function ()
	{
		Calculadora.op1 = 0
		Calculadora.op2 = 0
		Calculadora.display.innerHTML = '0'
		Calculadora.primeraVez = true
		operacion = ''
	},
	sumar : function()
	{
		Calculadora.op1 = Calculadora.display.innerHTML;
		Calculadora.display.innerHTML = "";
		operacion = '+'
		Calculadora.primeraVez = true
	},
	restar : function()
	{
		Calculadora.op1 = Calculadora.display.innerHTML;
		Calculadora.display.innerHTML = "";
		operacion = '-'
		Calculadora.primeraVez = true
	},
	multiplicar : function()
	{
		Calculadora.op1 = Calculadora.display.innerHTML;
		Calculadora.display.innerHTML = "";
		operacion = '*'
		Calculadora.primeraVez = true
	},
	dividir : function()
	{
		Calculadora.op1 = Calculadora.display.innerHTML;
		Calculadora.display.innerHTML = "";
		operacion = '/'
		Calculadora.primeraVez = true
	},
	igual : function()
	{
		if (Calculadora.primeraVez) 
		{
			Calculadora.op2 = Calculadora.display.innerHTML
		}
		if (Calculadora.op1 == null || Calculadora.op2 == null) 
		{
			return;
		}
		switch (operacion)
		{
			case '+':
				Calculadora.display.innerHTML = Number(Calculadora.op1) + Number(Calculadora.op2)
				break;
			case '-':
				Calculadora.display.innerHTML = Calculadora.op1 - Calculadora.op2
				break;
			case '*':
				Calculadora.display.innerHTML = Calculadora.op1 * Calculadora.op2
				break;
			case '/':
				Calculadora.display.innerHTML = Calculadora.op1 / Calculadora.op2 
				break;
			default:
				return;
		}
		Calculadora.primeraVez = false
		Calculadora.op1 = Calculadora.display.innerHTML
	},
	feedback : function(element)
	{
		console.log('feedback')
		element.style.padding = "3px 3px 3px 3px";
		element.onmouseup = function () 
		{
			console.log('ya')
			element.style.padding = "0px 0px 0px 0px";
		}
	},
	cambiarSigno : function()
	{
		if (Calculadora.display.innerHTML.charAt(0) != '-') 
		{
			Calculadora.display.innerHTML = '-' + Calculadora.display.innerHTML	
		} 
		else 
		{
			Calculadora.display.innerHTML = Calculadora.display.innerHTML.substring(1)
		}
	},
	inicializacion: function() 
	{
		// enlazar botones
		Calculadora.btnClear.addEventListener('click', function(){Calculadora.clear()})
		Calculadora.btn0.addEventListener('click', function(){Calculadora.append(0);Calculadora.feedback(Calculadora.btn0)})
		Calculadora.btn1.addEventListener('click', function(){Calculadora.append(1);Calculadora.feedback(Calculadora.btn1)})
		Calculadora.btn2.addEventListener('click', function(){Calculadora.append(2);Calculadora.feedback(Calculadora.btn2)})
		Calculadora.btn3.addEventListener('click', function(){Calculadora.append(3)})
		Calculadora.btn4.addEventListener('click', function(){Calculadora.append(4)})
		Calculadora.btn5.addEventListener('click', function(){Calculadora.append(5)})
		Calculadora.btn6.addEventListener('click', function(){Calculadora.append(6)})
		Calculadora.btn7.addEventListener('click', function(){Calculadora.append(7)})
		Calculadora.btn8.addEventListener('click', function(){Calculadora.append(8)})
		Calculadora.btn9.addEventListener('click', function(){Calculadora.append(9)})
		Calculadora.btnDot.addEventListener('click', function(){Calculadora.append('.')})
		Calculadora.btnMas.addEventListener('click', function(){Calculadora.sumar()})
		Calculadora.btnMenos.addEventListener('click', function(){Calculadora.restar()})
		Calculadora.btnPor.addEventListener('click', function(){Calculadora.multiplicar()})
		Calculadora.btnDiv.addEventListener('click', function(){Calculadora.dividir()})
		Calculadora.btnIgual.addEventListener('click', function(){Calculadora.igual()})
		Calculadora.btnSigno.addEventListener('click', function(){Calculadora.cambiarSigno()})
	}
}


Calculadora.inicializacion()



