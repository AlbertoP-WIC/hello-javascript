/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
function createSum (a = 0, b = 0) {
    return (a + b)
}
console.log(`El resultado es ${createSum(5,10)}.`)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
function sortArray (myArray) {
    let myArray2 = myArray.sort().reverse()
    return console.log(`El numero mayor del array es: ${myArray2[0]}`)
}
sortArray([56, 2, 94, 26, 10, 999])

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
function viewVowels (myString) {
    let vVocales = "aeiouAEIOU"
    let vCounter = 0
    for (let vIndex = 0; vIndex<myString.length; vIndex++) {
        if (vVocales.includes(myString[vIndex])) {
            vCounter++
        }
    }
    return console.log(`El numero de vocales es: ${vCounter}`)
}
viewVowels("Esto es un string.") // Respuesta esperada es 5.

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
let myString2 = ["esto", "es", "un", "string"]
console.log(toUpperCase(myString2))

function toUpperCase (arr) {
    return arr.map(str => str.toUpperCase())
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una función que calcule el factorial de un número dado.
