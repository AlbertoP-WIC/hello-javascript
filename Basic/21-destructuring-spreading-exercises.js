/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array.
const vArray1 = ["Elemento 1", "Elemento 2", "Elemento 3"];
let [vValue1, vValue2] = vArray1;
console.log("Respuesta del ejercicio 1:");
console.log(vValue1);
console.log(vValue2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.
const vArray2 = [1, 2, 3];
let [vValue3, , , vValue4 = 4] = vArray2;
console.log("Respuesta del ejercicio 2:");
console.log(vValue3);
console.log(vValue4);

// 3. Usa desestructuración para extraer dos propiedades de un objeto.
let vDish01 = {
    food1: "eggs",
    food2: "ham"
};
let {food1, food2} = vDish01;
console.log("Respuesta del ejercicio 3:");
console.log(food1);
console.log(food2);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes.
let vDish02 = {
    food1: "eggs",
    food2: "ham"
};
let {food1: vFood1, food2: vFood2} = vDish01;
console.log("Respuesta del ejercicio 4:");
console.log(vFood1);
console.log(vFood2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.
let vDish03 = {
    food1: "eggs",
    food2: "ham",
    sauce1: {
        food3: "pepper",
        food4: "jalapeño"
    }
};
let {food1: vFood3, sauce1: {food4: vFood4} } = vDish03;
console.log("Respuesta del ejercicio 5:");
console.log(vFood3);
console.log(vFood4);

// 6. Usa propagación para combinar dos arrays en uno nuevo.
const myArray1 = ["a", "b", "c"];
const myArray2 = ["d", "e", "f"];
let myNewArray = [...myArray1, ...myArray2];
console.log("Respuesta del ejercicio 6:");
console.log(myNewArray);

// 7. Usa propagación para crear una copia de un array.
const myArray3 = ["red", "white", "green"];
let myNewArray2 = [...myArray3];
console.log("Respuesta del ejercicio 7:");
console.log(myNewArray2);

// 8. Usa propagación para combinar dos objetos en uno nuevo.


// 9. Usa propagación para crear una copia de un objeto.


// 10. Combina desestructuración y propagación.
