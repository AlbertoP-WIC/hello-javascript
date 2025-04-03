/*
Clase 33 - Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=14229
*/

// Objetos.

// Sintaxis.
let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades.

// Notación punto.
console.log(person.name)

// Notación de corchetes.
console.log(person["name"])

// Modificación de propiedades.
person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades.
delete person.age
console.log(person)

// Nueva propiedad.
person.email = "braismoure@mouredev.com"
person["age"] = 37

console.log(person)

// Métodos (funciones).
// Se puede asignar funciones dentro de las propiedades un objeto.
let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos.
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos.
// Dos objects nunca van a ser iguales, solo se puede comparar cada una de las propiedades.
let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración.
// Para iterar en un objeto en lugar de usar For Of, se debe usar For In.

// Ejemplo 1:
for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Ejemplo 2:
/*
The for...in loop iterates over the properties of the user object.
"key" will take the values of the property names ("name", "age", "isAdmin") one by one.
alert( key ) displays the current property name.
alert( user[key] ) retrieves and displays the corresponding value of that property.
*/
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    alert( key );  // All keys: name, age, isAdmin.
    alert( user[key] ); // All vaules for the keys: John, 30, true.
  }

// Funciones como objetos.
// Esto no es una buena practica, se debe usar una clase de esto.

function Person(name, age) { // Debería ser una clase.
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
