/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea.
// This is a comment.

// 2. Escribe un comentario en varias líneas.
/*
This is a comment on multiple lines.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let vText = "This is a text string."
let vNumber = 5
let vCheck = true
let nUndefined
let vNull = null
let vBigInt = BigInt(123427645873648576)
let vSym = Symbol("This is a Symbol data type.")

// 4. Imprime por consola el valor de todas las variables.
let vPrint = console.log
vPrint(vText)
vPrint(vNumber)
vPrint(vCheck)
vPrint(nUndefined)
vPrint(vNull)
vPrint(vBigInt)
vPrint(vSym)

// 5. Imprime por consola el tipo de todas las variables.
vPrint(typeof vText)
vPrint(typeof vNumber)
vPrint(typeof vCheck)
vPrint(typeof nUndefined)
vPrint(typeof vNull)
vPrint(typeof vBigInt)
vPrint(typeof vSym)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.
let vText = "This is another text string."
let vNumber = 10
let vCheck = false
let nUndefined
let vNull = null
let vBigInt = BigInt(45454545454545454545)
let vSym = Symbol("This is another Symbol data type.")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.
let vText = Symbol("This is another Symbol data type.")
let vNumber = false
let vCheck
let nUndefined = null
let vNull = BigInt(45454545454545454545)
let vText = "This is another text string."
let vBigInt = 
let vSym = 10

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const vText2 = "This is another text string."
const vNumber2 = 10
const vCheck2 = false
const nUndefined2
const vNull2 = null
const vBigInt2 = BigInt(45454545454545454545)
const vSym2 = Symbol("This is another Symbol data type.")

// 9. A continuación, modifica los valores de las constantes.
const vText2 = "This is another and another text string."
const vNumber2 = 15
const vCheck2 = true
const nUndefined2
const vNull2 = null
const vBigInt2 = BigInt(989898989898989898989898989898)
const vSym2 = Symbol("This is another and another Symbol data type.")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.
// 43