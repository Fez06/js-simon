'use strict';



// -------------------FUNZIONI

//crea numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//controllore(non so se servira')
function controllore(arrayName, valore) {
    for (let i = 0; i < arrayName.length; i++) {

        //console.log(arrayName[i]);
        if (valore === arrayName[i]) {
            console.log('gia esistente');
            return true
        } 

    }
    console.log('diverso');
    return false
}


//riempi array con valori random unici
function fillArrayUnicCasual(nValori, valoreMax, arrayName) {

    let i = 0;
    while (i < nValori) {

        const posValue = randomNumber(1, valoreMax);
        //console.log('roll');
        //console.log(posValue);
        if (controllore(arrayName, posValue) === false) {
            arrayName.push(posValue);
            i++;
        }

    }
    //console.log(arrayName);
}


// -------------------------MAIN


const gruppoNumeri = [];

fillArrayUnicCasual(5, 100, gruppoNumeri);
console.log(gruppoNumeri);

const visualHtml = document.querySelector('div');
visualHtml.innerText = gruppoNumeri;
