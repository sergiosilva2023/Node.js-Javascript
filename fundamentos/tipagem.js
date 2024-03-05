/**
 * Tutorial Node.js
 * Tipagem dinâmica
 */

console.log("____________________________________________strings")
let nome = "Sérgio Silva"
console.log(typeof(nome))
console.log(typeof nome)
console.log(nome.replace("Sérgio", "Sergio"))
// dica .replace (",", ".")
// 2 exemplos de concatenação, o resultado é o mesmo
console.log("Aluno: " + nome)
console.log(`Aluno: ${nome}`)
console.log("____________________________________________números")
let peso = 61
let altura = 1.65
console.log(typeof peso)
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
// Atenção!
console.log(10/0)
console.log("3" + 2)// neste caso não é uma soma mas sim uma concatenação
console.log("3" - 2)// neste caso é uma subtração
console.log("____________________________________________booleanos")
let sw = true
console.log(`Chave: ${sw}`)
let lamp = !1
console.log(typeof(lamp))
console.log(`Lampada: ${lamp}`)