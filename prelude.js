//Exercice 1
function lowerCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))

//Exercice 2
function upperCase(upper){
	return upper.toUpperCase();
}
var upperName1 = upperCase('Maxime');
var upperName2 = upperCase('BEN');

console.log("---- Exerice 2 ----");
console.log(upperName1);
console.log(upperName2);