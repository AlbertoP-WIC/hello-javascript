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
sortArray([56, 2, 94, 999, 26, 10])


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
function viewVowels(myString) {
    let vVocales = "aeiouAEIOU" // Lista de vocales en minúscula y mayúscula.
    let vCounter = 0 // Contador para las vocales.
    
    for (let vIndex = 0; vIndex <= myString.length; vIndex++) { // Recorremos cada carácter de la cadena.
        if (vVocales.includes(myString[vIndex])) { // Si el carácter actual está en `vVocales`.
            vCounter++; // Incrementamos el contador.
        }
    }
    return console.log(`El número de vocales es: ${vCounter}`) // Mostramos el resultado.
}
viewVowels("Esto es un string.") // Respuesta esperada: 5.


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
function toUpperCase(arr) {
    let resultado = [] // Creamos un array vacío para almacenar los resultados.

    for (let i = 0; i < arr.length; i++) { // Recorremos el array con un bucle `for`.
        resultado.push(arr[i].toUpperCase()) // Convertimos el string a mayúsculas y lo agregamos al nuevo array.
    }
    return console.log(resultado) // Devolvemos el array con los strings en mayúsculas.
}
toUpperCase(["hola", "mundo", "javascript"])


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
function esPrimo(numero) {
    if (numero < 2) return false // Los números menores que 2 no son primos (ni 0 ni 1).
    for (let i = 2; i <= Math.sqrt(numero); i++) { // Iteramos desde 2 hasta la raíz cuadrada de `numero`.
        if (numero % i === 0) return false // Si `numero` es divisible por `i`, no es primo.
    }
    return true // Si no se ha encontrado ningún divisor, es primo.
}
console.log(esPrimo(3))  // true. Es primo.
console.log(esPrimo(10)) // false. No es primo.


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function elementosComunes(arr1, arr2) {
    const setArr2 = new Set(arr2) // Convertimos arr2 a un Set para optimizar la búsqueda.
    return arr1.filter(element => setArr2.has(element)) // Comprobamos si cada elemento de arr1 está en arr2.
}
const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]
console.log(elementosComunes(array1, array2)) // Salida: [3, 4, 5].


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
function sumaPares(array) {
    let suma = 0  // Inicializamos una variable para acumular la suma.
    for (let i = 0; i < array.length; i++) { // Recorremos el array elemento por elemento.
        if (array[i] % 2 === 0) {  // Verificamos si el número es par (divisible por 2).
            suma += array[i]  // Si es par, lo sumamos a la variable `suma`.
        }
    }
    return suma  // Devolvemos el resultado final.
}
console.log(sumaPares([1, 2, 3, 4, 5, 6])) // Salida: 12 (porque 2 + 4 + 6 = 12).


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
function changeToSquare (vArray) {
    let newArray =[]
    for (let vIndex = 0; vIndex<vArray.length; vIndex++) {
        newArray.push(vArray[vIndex] ** 2)
    }
    return console.log(newArray)
}
changeToSquare([5, 6, 18, 25])


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function invertirPalabras (cadena) {
    return cadena.split(" ").reverse().join(" ")
}
console.log(invertirPalabras("Hola mundo"))


// 10. Crea una función que calcule el factorial de un número dado.
// El factorial de un número n se define como el producto de todos los enteros positivos menores o iguales a n.
function factorial(n) {
    let resultado = 1 // Inicializamos `resultado` en 1, ya que el factorial de cualquier número comienza multiplicando por 1.
    for (let i = 2; i <= n; i++) { // Comenzamos el bucle en 2, ya que multiplicar por 1 no cambia el valor.
        resultado *= i // Multiplicamos `resultado` por `i` en cada iteración.
    }
    return console.log(`El factorial de ${n} es ${resultado}`) // Mostramos el resultado del cálculo.
}
factorial(5) // Salida: "El factorial de 5 es 120"
