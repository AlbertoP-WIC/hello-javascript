/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales.
const vAnimals = ["tigre","dragon","caballo","conejo","paloma"]
console.log(vAnimals)

// 2. Añade dos más. Uno al principio y otro al final.
vAnimals.unshift("raton") // Principio
vAnimals.push("leon") // Final
console.log(vAnimals) // Nuevo array = "raton","tigre","dragon","caballo","conejo","paloma","leon"

// 3. Elimina el que se encuentra en tercera posición.
vAnimals.splice(2,1) // Se eliminó Dragon.
console.log(vAnimals)

// 4. Crea un set que almacene cinco libros.
const vLibros = new Set(["Libro a","Libro b","Libro c","Libro d", "Libro e"])
console.log(vLibros)

// 5. Añade dos más. Uno de ellos repetido.
vLibros.add("Libro f","Libro a")
console.log(vLibros)

// 6. Elimina uno concreto a tu elección.
vLibros.delete("Libro a")
console.log(vLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre.
const vMonth = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);
console.log(vMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
if (vMonth.has(5)) {
    console.log(vMonth.get(5))
} else {
console.log("Key does not exists.")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

const vSummer = ["Junio","Julio","Agosto"]
vMonth.set(13, vSummer)
console.log(vMonth)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

const vArray = ["a", "b", "c"]
const vSet = new Set(vArray)
const vMap = new Map()
vMap.set(1, "a")
vMap.set(2, "b")
vMap.set(3, "c")
console.log(vMap)
