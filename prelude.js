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
console.log(lowerCase('TONY TONY \n'));

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
console.log(upperCase('TONY TONY \n'));

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
console.log(length('Ch0pper\n'));

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
console.log(capitalize('one COde', false));
console.log(capitalize('One Code \n', true));

//Exercice 5
function decapitalize(decap='')
{
	let sentence = '';
	for (let i = 0; i < decap.length; i++)
	{
		const code = decap.charCodeAt(i);
		if ((i == 0 && code >= 65 && code <= 90) || decap.charCodeAt(-i) == 32)
		{
			sentence += String.fromCharCode(code + 32);
		}
		else if ((i == 0 && code >= 97 && code <= 122) || decap.charCodeAt(-i) == 32) {
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

//Exercice 6
/*function kebabCase(kebab = '')
{

}*/