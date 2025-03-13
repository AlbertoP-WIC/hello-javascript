/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let vName = 1

if (vName == 1){
    console.log("Beto")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let vUser = "John"
let vEmail = "john@yahoo.com"

if (vUser == "John" && vEmail == "john@yahoo.com"){
    console.log("Name and email address are correct!")
} else {
    console.log("Check your username and email address.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let vNumber = 15

if (vNumber > 0){
    console.log("El numero es positivo.")
} else if (vNumber < 0){
    console.log("El numero es negativo.")
} else {
    console.log("El numero es cero.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let vVote = 5

if (vVote >= 18){
    console.log("Puedes votar.")
} else {
    console.log(`Aun no puedes votar. Te faltan ${18-vVote} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
let vAge = 11

let vAlert = vAge >= 18 ? "Usuario es adulto." : "Usuario es menor."
console.log(vAlert)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let vMonth = 5

if (vMonth >= 1 && vMonth <= 3){
    console.log("Es primavera.")
} else if (vMonth >= 4 && vMonth <= 6){
    console.log("Es verano.")
} else if (vMonth >= 7 && vMonth <= 9) {
    console.log("Es otoño.")
} else if (vMonth >= 10 && vMonth <= 12) {
    console.log("Es invierno.")
} else {
    console.log("Dato incorrecto. Colocar numero del 1 al 12.")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.
if (vMonth == 1 || vMonth == 3 || vMonth == 5 || vMonth == 7 || vMonth == 8 || vMonth == 10 || vMonth == 12){
    console.log("El mes tiene 31 dias.")
} else if (vMonth == 4 || vMonth == 6 || vMonth == 9 || vMonth == 11) {
    console.log("El mes tiene 30 dias.")
} else {
    console.log("El mes tiene 28 dias.")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let vLang = "JAP" // Opciones posibles: ENG, SPA, JAP.

switch (vLang) {
    case "ENG":
        console.log("Hello there!")
    break
    case "SPA":
        console.log("Hola amigo!")
    break
    case "JAP":
        console.log("Kon'nichiwa")
    break
    default:
        console.log("Lenguaje no admitido.")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
// Se usara la misma variable vMonth del ejercicio 6.

switch (vMonth) {
    case 1 :
    case 2 :
    case 3 :
        console.log("Es primavera.")
    break
    case 4 :
    case 5 :
    case 6 :
        console.log("Es verano.")
    break
    case 7 :
    case 8 :
    case 9 :
        console.log("Es otoño")
    break
    case 10 :
    case 11 :
    case 12 :
        console.log("Es invierno.")
    break
    default:
        console.log("Mes no admitido.")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
// Se usara la misma variable vMonth del ejercicio 7.

switch (vMonth) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10 :
    case 12 :
        console.log("El mes tiene 31 dias.")
    break
    case 4 :
    case 6 :
    case 9 :
    case 11 :
        console.log("El mes tiene 30 dias.")
    break
    case 2 :
        console.log("El mes tiene 28 dias.")
    default :
        console.log("Informacion no admitida.")
}
