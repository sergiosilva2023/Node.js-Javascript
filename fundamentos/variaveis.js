/**
 * Tutorial Node.js
 * Variáveis
 */

console.log("________________________________________const")
const nome = "Sérgio Silva"
console.log(nome)
console.log(typeof nome)
console.log("________________________________________")
const pi = 3.14
console.log(pi)
console.log(typeof pi)
console.log("________________________________________")
const vip = true
console.log(vip)
console.log(typeof vip)
console.log("________________________________________var")
var time = "Corinthians"
console.log(time)
console.log(typeof time)
time = "Palmeiras"
console.log(time)
// Problema no uso do var para declarar uma variável, mostra que aceita nova declarção de variavel
// Para evitar isso utilizar o let, o let não permite usar outra variável com o mesmo nome
var time = "São Paulo"
console.log(time)
console.log("________________________________________let")
let linguagem = "Java"
console.log(linguagem)
linguagem = "JavaScript"
console.log(linguagem)
//let linguagem = "Python"