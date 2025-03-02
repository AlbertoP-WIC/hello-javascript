/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto.
let vName = "Morrito"
let vLastName = "Senpai"
let vFullName = "Hola soy "+vName+" "+vLastName+" !"
console.log(vFullName)

// 2. Muestra la longitud de una cadena de texto.
console.log(vFullName.length)

// 3. Muestra el primer y último carácter de un string.
console.log(vFullName[0])
console.log(vFullName[24])

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(vFullName.toUpperCase())
console.log(vFullName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.
let vMulti = `Cadena 
de 
texto 
multiples 
lineas.`
console.log(vMulti)

// 6. Interpola el valor de una variable en un string.
console.log(`Hola otra vez soy ${vName} ${vLastName} !`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
console.log(vFullName.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
let vCheck = "Mario"
console.log(vFullName.includes(vCheck,0))

// 9. Comprueba si dos strings son iguales.
console.log(vName.localeCompare(vLastName)) // Nota = Valor esperado debe ser negativo.

// 10. Comprueba si dos strings tienen la misma longitud.
let vL1 = vName.length
let vL2 = vLastName.length
console.log(vL1)
console.log(vL2)
console.log(vL1 == vL2)
