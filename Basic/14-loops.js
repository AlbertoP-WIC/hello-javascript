/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// for
// La condicion se ejecuta dentro del for.

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while
// La condicion se ejecuta fuera del bloque while. O sea antes de cada iteracion.
// El codigo se puede ejecutar solo si la condicion se cumple.

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true) {
// }

// do while
// Igual al while, con la diferencia que aqui el codigo si se ejecuta minimo 1 vez.
// La condicion se revisa despues de cada iteracion.
i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of
// Recorre los valores de un objeto que sea iterable.
// Se considera algo iterable una estructura de datos y un tipo de dato.

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

// En este ejemplo imprime cada elemento del array.
for (let value of myArray) {
    console.log(value)
}

// En este ejemplo imprime cada elemento del set.
for (let value of mySet) {
    console.log(value)
}

// En este ejemplo imprime cada elemento del key y value del map.
for (let value of myMap) {
    console.log(value)
}

// En este ejemplo imprime cada letra del string por separado.
const myString = "¡Hola, JavaScript!"
for (let value of myString) {
    console.log(value)
}

// break y continue
// El continue lo que hace es ignorar un valor en especifico y continuar con el loop.
// En este ejemplo: Si i = 5, ignoralo del loop y continua con el siguiente elemento.
// El break detiene por completo el loop en la condicion especificada.
// Para este ejemplo el loop se rompe si i = 7.

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}
