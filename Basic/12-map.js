/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev") // Se agrega una nueva Key al Map.
myMap.set("name", "Brais Moure") // Se remplaza el value de la Key "name".
// A diferencia de los Arrays, esto es como una tabla y se manejan las Keys.
// Si la Key existe este method remplaza el valor, si no existe la agrega al Map.

console.log(myMap)

// get

console.log(myMap.get("name")) // Retorna el value de la Key.
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname")) // Comprueba si una Key existe, retorna un boolean.
console.log(myMap.has("age"))

// delete

myMap.delete("email") // Borra tanto la Key como el value, especificando el Key.
console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) // Retorna un listado de solo las Keys.
console.log(myMap.values()) // Retorna un listado  de solo los Values.
console.log(myMap.entries()) // Retorna cuantas "rows" tiene.

// size

console.log(myMap.size)

// clear, Borra todo el Map.

myMap.clear()

console.log(myMap)
