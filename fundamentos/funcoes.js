/**
 * Tutorial Node.js
 * Funções
 */
const read = require('readline-sync')
function hello() {
    console.log("Hello Function")
}
hello()
console.log(typeof hello)

const hello2 = function(){
    console.log("Hello Function Assigned")
}
hello2()
console.log(typeof hello2)

const hello3 = () => {
    console.log("Hello Arrow Function Assigned")
}
hello3()
console.log(typeof hello3)

const hello4 = _ => console.log("Hello Arrow Function Assigned Simplified")

hello4()
console.log(typeof hello4)


let num1 = Number(read.question("Digite o primeiro valor: ").replace(",","."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",","."))
function somarS (num1, num2){
    return (console.log(num1+num2))
}
somarS(num1,num2)

const hello5 = _ => console.log((50+50)/2)
hello5()

let dividirD = function(num3,num4){
    return (console.log(num3/num4))
}
dividirD(100,10)
console.log(typeof dividirD)

let multiplicaM = (n0,n1) => {
    return (console.log(n0*n1))
}
multiplicaM(5,5)

let somarAFS = (n1, n2) => (console.log(n1+n2))
somarAFS(5,5)

