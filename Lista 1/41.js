/*
    41)  Faça um programa que dada a idade de um nadador, classifique-o em uma das seguintes categorias: 
    - Infantil A = 5 a 7 anos 
    - Infantil B = 8 a 11 anos 
    - Juvenil A = 12 a 13 anos 
    - Juvenil B = 14 a 17 anos 
    - Adultos = Maiores de 18 anos
*/

let inputAge = document.getElementById("age");
let outputAge = document.getElementById("result");
let button = document.getElementById("btn");

function verifyYearsOld(age) {
    if (age >= 5 && age <= 7) {
        return "Infantil A";
    } else if (age >= 8 && age <= 11) {
        return "Infantil B";
    } else if (age >= 12 && age <= 13) {
        return "Juvenil A";
    } else if (age >= 14 && age <= 17) {
        return "Juvenil B";
    } else {
        return "Adultos";
    }

}
button.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputAge.value <= 0) {
        outputAge.textContent = "Invalid number!";
    } else {
        outputAge.textContent = verifyYearsOld(inputAge.value);
    }
})