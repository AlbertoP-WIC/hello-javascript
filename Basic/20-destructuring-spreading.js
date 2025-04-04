/*
Clase 35 - Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=15747
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Ejemplos de como se asignan valores normalmente:
let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Desestructuración.
// Es una sintaxis que permite extraer valores de objetos o arrays y asignarlos a variables.


// Sintaxis arrays.
// Asigna cada elemento del array en una variable diferente.
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados.
// Es necesario crear variables nuevas y colocar los valores por defecto.
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array.
// Para ignorar ciertos elementos de un array no hay que agregar una variable.
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis para objects.
let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados.
// Los nombres que se usan para las variables deben ser los nombres de las Keys.
// En este ejemplo por eso da valores undefined, NO SE DEBE USAR.
let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables.
// Esta es la manera correcta para asignar las Key a variables nuevas.
let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados.
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

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)


// Propagación (...)
// Expande elementos de un Array o un Object a otros Arrays u Objects.

// Sintaxis Arrays.
let myArray2 = [...myArray, 5, 6] // Se hizo una copia del myArray y se agregaron elementos nuevos.
console.log(myArray2)

// Copia de Arrays.
let myArray3 = [...myArray] // Solo se hizo una copia myArray.
console.log(myArray3)

// Combinación de Arrays.
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sintaxis objects.
let person4 = { ...person, email: "braismoure@mouredev.com" } // Se hizo la copia del object y se agrego una nueva key.
console.log(person4)

// Copia de objects.
let person5 = { ...person } // Solo se hizo copia del object.
console.log(person5)
