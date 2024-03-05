/**
 * Tutorial Node.js
 * Entrada de dados via terminal
 * Aplicativo IMC
 */

const colors = require('colors')
const read = require('readline-sync')
console.clear()
console.log(" ___ __  __  ___ ")
console.log("|_ _|  \\/  |/ __|")
console.log(" | || |\\/| | (__ ")
console.log("|___|_|  |_|\\___|")
console.log("")
let nome = read.question("Digite o seu nome: ")
let peso = Number(read.question("Digite o seu peso (Kg): ").replace(",","."))
let altura = Number(read.question("Digite a sua altura (m): ").replace(",","."))
let imc = peso / (altura * altura)
console.log("")
console.log("--------------------------------------------")
console.log("Minha ficha".italic.bold)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC ${imc.toFixed(2)}`)
console.log("-------------------------------------------")
if (imc <= 18.5){
    console.log(`Olá, ${nome}, voçê está abaixo do peso (${imc.toFixed(2)}), veja um médico rápido!`.red)
} else if(imc > 18.5 && imc <= 24.9){
    console.log(`Olá, ${nome}, voçê está no peso ideal (${imc.toFixed(2)}), parabéns!`.green)
} else if(imc >= 25.0 && imc <=29.9){
    console.log(`Olá, ${nome}, voçê está levemente acima do peso (${imc.toFixed(2)}), cuidado!`.blue)
} else if(imc >= 30.0 && imc <= 34.9){
    console.log(`Olá, ${nome}, obesidade grau I (${imc.toFixed(2)}), veja um médico rápido!`.blue)
} else if(imc >= 35 && imc <= 39.9){
    console.log(`Olá, ${nome}, obesidade grau II (severa) (${imc.toFixed(2)}), veja um médico rápido!`.blue.bold)
} else
    console.log(`Olá, ${nome}, obesidade III (mórbida) (${imc.toFixed(2)}), encomende um caixão!`.red.bold)
console.log("")
console.log("-------------------------------------------")