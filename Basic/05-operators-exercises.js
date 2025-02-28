/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética.
let a = 2
let b = 4

let vSuma = a + b
let vResta = a - b
let vMult = a * b
let vDiv = a / b
let vMod = a % b
let vExp = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas.
vSuma += 2
vResta -+ 2
vMult *= 2
vDiv /= 2
vMod %= 2
vExp **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación.
console.log(1 == 1)
console.log(2 > 1)
console.log(1 < 2)
console.log("Hola"==="Hola")
console.log(1 <= 1)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.
console.log(1 == 2)
console.log(1 > 2)
console.log(2 < 1)
console.log("Hola" === "Hello")
console.log(2 <= 1)

// 5. Utiliza el operador lógico and.
console.log(true && true)

// 6. Utiliza el operador lógico or.
console.log(false || true)

// 7. Combina ambos operadores lógicos.
console.log(2 > 1 && 1 > 2 || 3 > 2)

// 8. Añade alguna negación.
console.log(!(2 > 1 && 1 > 2 || 3 > 2))

// 9. Utiliza el operador ternario.
let vTer = true
vTer ? console.log("El valor es positivo") : console.log("El valor es negativo")

// 10. Combina operadores aritméticos, de comparáción y lógicas.
let vTest1 = 5 + 10
let vTest2 = 8 + 2
console.log(vTest1 > vTest2 && true)
