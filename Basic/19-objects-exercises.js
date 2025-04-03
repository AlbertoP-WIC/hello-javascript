/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades.
let car = {
  brand: "Chevrolet",
  model: "Malibu",
  year: 2013
};

// 2. Accede y muestra su valor.
console.log("Respuesta del ejercicio 2:");
console.log(car);

// 3. Agrega una nueva propiedad.
car.color = "silver";

console.log("Respuesta del ejercicio 3:");
console.log(car);

// 4. Elimina una de las 3 primeras propiedades.
delete car.year;

console.log("Respuesta del ejercicio 4:");
console.log(car);

// 5. Agrega una función e invócala.
car.status = function() {
    console.log("The status of the car is fine!.");
};

console.log("Respuesta del ejercicio 5:");
car.status();

// 6. Itera las propiedades del objeto.
console.log("Respuesta del ejercicio 6:");
for (let key in car) {
    console.log(`Para la key "${key}" el valor es "${car[key]}"`);
};

// 7. Crea un objeto anidado.
car.motor = {
    cylinders: 4,
    type: "DOHC",
    fuel: "Gasoline"
};

console.log("Respuesta del ejercicio 7:");
console.log(car);

// 8. Accede y muestra el valor de las propiedades anidadas.
console.log("Respuesta del ejercicio 8:");
console.log(car.motor);

// 9. Comprueba si los dos objetos creados son iguales.
console.log("Respuesta del ejercicio 9:");
console.log(car == car.motor);
console.log(car === car.motor);

// 10. Comprueba si dos propiedades diferentes son iguales.
console.log("Respuesta del ejercicio 10:");
console.log(car.model == car.motor.type); // Debe ser false.
console.log(car.model === car.motor.type); // Debe ser false.
console.log(car.model == car.model); // Debe ser true.
