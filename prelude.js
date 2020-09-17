//Exercice 1
function lowerCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32);
        } else {
            sentence += String.fromCharCode(code);
        }
    }

    return sentence;
}
console.log('---- Exercice 1 ----');
console.log(lowerCase('Chopper'));
console.log(lowerCase('TONY TONY'));
console.log("\n");

//Exercice 2
function upperCase(upper = ''){
	let sentence = '';
	for(let i = 0; i < upper.length; i++)
	{
		const code = upper.charCodeAt(i);
		if(code >= 97 && code <= 122)
		{
			sentence += String.fromCharCode(code - 32);
		}
		else{
			sentence += String.fromCharCode(code);
		}
	}
	return sentence;
}
console.log("---- Exerice 2 ----");
console.log(upperCase('Chopper'));
console.log(upperCase('TONY TONY'));
console.log("");

//Exercice 3
function length(length='')
{
	let count = 0;
	for (let i = 0; i < length.length; i++)
	{
		count += 1;
	}
	return count;
}
console.log("---- Exerice 3 ----");
console.log(length('Ch0pper'));
console.log("");

//Exercice 4
function capitalize(cap='', restToLoweropt = false){
	let sentence = '';
	for (let i = 0; i < cap.length; i++)
	{
		const code = cap.charCodeAt(i);

		if (i == 0 && code >= 97 && code <= 122)
		{
			sentence += String.fromCharCode(code - 32);
		}
		if (i == 0 && code >= 65 && code <= 90) {
			sentence += String.fromCharCode(code);
		}
		if (restToLoweropt == true && i != 0){
			if (code >= 65 && code <= 90)
			{
				sentence += String.fromCharCode(code + 32);
			}
			else {
				sentence += String.fromCharCode(code);
			}
		}
		else if (i != 0) {
			sentence += String.fromCharCode(code);
		}
	}
	return sentence;
}
console.log("---- Exerice 4 ----");
console.log(capitalize('one Code'));
console.log(capitalize('One CODE', true));
console.log("");

//Exercice 5
function decapitalize(decap='')
{
	let sentence = '';
	for (let i = 0; i < decap.length; i++)
	{
		const code = decap.charCodeAt(i);
		if ((i == 0 && code >= 65 && code <= 90) || decap.charCodeAt(i - 1) == 32)
		{
			sentence += String.fromCharCode(code + 32);
		}
		else if ((i == 0 && code >= 97 && code <= 122) || decap.charCodeAt(i - 1) == 32) {
			sentence += String.fromCharCode(code);
		}
		else if (i != 0) {
			sentence += String.fromCharCode(code);
		}
	}
	return sentence;
}
console.log("---- Exerice 5 ----");
console.log(decapitalize('El Drago'));
console.log(decapitalize('Wooman'));
console.log("");

//Exercice 6
function kebabCase(kebab = '')
{
	let sentence = '';
	let tiretDebFin = false;
	for (let i = 0; i < kebab.length; i++)
	{
		tiretDebFin = false;
		const code = kebab.charCodeAt(i);
		if (code == 32)
		{
			sentence += String.fromCharCode(code + 13);	
		}
		if (i == 0 && code == 45 || i == kebab.length-1 && code == 45)
		{
			tiretDebFin = true;
		}
		if (code >= 65 && code <= 90)
		{
			if (kebab.charCodeAt(i-1) != 45 && i != 0)
			{
				sentence += "-" + String.fromCharCode(code+32);
			}
			else
			{
				sentence += String.fromCharCode(code+32);
			}
		}
		else if (code != 32 && tiretDebFin == false)
		{
			sentence += String.fromCharCode(code);
		}		
	}
	return sentence;
}
console.log("---- Exerice 6 ----");
console.log(kebabCase('love one code'));
console.log(kebabCase('LoveOneCode'));
console.log(kebabCase('-Love-One-Code-'));
console.log("");

//Exercice 7
function snakeCase(snake = '')
{
	let sentence = '';
	let tiretDebFin = false;
	for (let i = 0; i < snake.length; i++)
	{
		tiretDebFin = false;
		const code = snake.charCodeAt(i);
		if (code == 32)
		{
			sentence += String.fromCharCode(code + 63);	
		}
		if (i == 0 && code == 45 || i == snake.length-1 && code == 45)
		{
			tiretDebFin = true;
		}
		if (code >= 65 && code <= 90)
		{
			if (snake.charCodeAt(i-1) != 45 && i != 0)
			{
				sentence += "_" + String.fromCharCode(code+32);
			}
			else
			{
				sentence += String.fromCharCode(code+32);
			}
		}
		else if (code != 32 && tiretDebFin == false)
		{
			if (code == 45)
			{
				sentence += String.fromCharCode(code + 50);
			}
			else
			{
				sentence += String.fromCharCode(code);
			}
		}		
	}
	return sentence;
}
console.log("---- Exerice 7 ----");
console.log(snakeCase('gold d roger'));
console.log(snakeCase('GoldDRoger'));
console.log(snakeCase('-Gold-D-Roger-'));
console.log("");

//Exercice 8
function swapCase(swap=''){
	let sentence = '';
	for (let i = 0; i < swap.length; i++)
	{
		const code = swap.charCodeAt(i);

		if (code >= 97 && code <= 122)
		{
			sentence += String.fromCharCode(code - 32);
		}
		if (code >= 65 && code <= 90) {
			sentence += String.fromCharCode(code + 32);
		}
		else if (code >= 48 && code <= 57 || code == 32) {
			sentence += String.fromCharCode(code);
		}
	}
	return sentence;
}
console.log("---- Exerice 8 ----");
console.log(swapCase('One Code'));
console.log(swapCase('1337 Fruits'));
console.log("");

//Exerxice 9
function charAt(char='', position)
{
	let sentence = '';
	for (let i = 0; i < char.length; i++)
	{
		sentence = char[position];
	}
	return sentence;
}
console.log("---- Exerice 9 ----");
console.log(charAt('chopper', 0));
console.log(charAt('chopper', 1));
console.log("");

//Exercice 10
function first(first = '', len = 1)
{
	let sentence = '';
	if (len > first.length)
	{
		len = first.length;
	}
	for (let i = 0; i < len; i++)
	{
		sentence += first[i];
	}
	return sentence;
}

console.log("---- Exerice 10 ----");
console.log(first('chopper'));
console.log(first('chopper', 2));
console.log(first('tony', 5));
console.log("");

//Exercice 11
function last(last = '', len = 1)
{
	let lstReverse = '';
	let sentence = '';
	if (len > last.length)
	{
		len = last.length;
	}
	let count = len-1;
	for (let i = last.length-1; i >= 0; i--)
	{
		lstReverse += last[i];
	}
	while (count >= 0)
	{
		sentence += lstReverse[count];
		count--;
	}
	return sentence;
}
console.log("---- Exerice 11 ----");
console.log(last('chopper'));
console.log(last('chopper', 2));
console.log(last('tony', 5));
console.log("");

//Exercice 12
function substr(str = '', start, len = str.endOfString)
{
	let sentence = '';
	for (let i = 0; i < str.length; i++)
	{
		
	}
}