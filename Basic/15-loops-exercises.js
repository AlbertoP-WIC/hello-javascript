/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.
for (let number = 1; number <= 10; number++) {
    console.log(number)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
// Nota: i++ -> i=i+1
let x = 1
let i = 0
do {x = x + i ; i++} 
while (i <= 100)
console.log(x)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.
// Nota: y+=2 - > y=y+2
let y = 2
for (y; y <= 50; y += 2) {
    console.log(y)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
const aNames = ["Jose", "Maria", "Jesus"]
for (let vPrint of aNames) {
    console.log(vPrint)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.
let vTexto = "Hola Mundo." // 4 vocales.
let vVocales = "AEIOUaeiou"
let vContador = 0
for (let z = 0; z < vTexto.length; z++) {
    if (vVocales.includes(vTexto[z])) {
        vContador++
    }
}
console.log(vContador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
const vArrNum = [1, 2, 3, 4, 5]
let vMulti = 1
for (let i = 0; i < vArrNum.length; i++) {
    vMulti *= vArrNum[i]
}
console.log(vMulti)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
for (let vMultiplo = 1; vMultiplo <= 10; vMultiplo++) {
    console.log(`Tabla 5 x ${vMultiplo} = ${5*vMultiplo}`)
}

// 8. Usa un bucle para invertir una cadena de texto.
let vTexto2 = "Hola JavaScript" // 15 elementos
let vTexto3 = ""
let k = vTexto2.length - 1
for (k; k >= 0; k--) {
    vTexto3 += vTexto2[k]
}
console.log(k)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
let n1 = 0, n2 = 1, siguiente;

console.log(n1); // Imprime 0
console.log(n2); // Imprime 1

for (let i = 2; i < 10; i++) { 
    siguiente = n1 + n2;
    console.log(siguiente);
    n1 = n2;
    n2 = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
