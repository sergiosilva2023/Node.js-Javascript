/**
 * Estrutura de dados
 * Array
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]
console.log(typeof alunosEM1)
// exibir dados de um array
console.log(alunosEM1.length)
console.table(alunosEM1)
console.log(alunosEM1[2])
// modificar dados no array
alunosEM1[2] = "João"
console.log(alunosEM1[2])
// adicionar dados nos array
alunosEM1.push("Jorge")
console.table(alunosEM1)
alunosEM1.splice(4,0, "Matheus", "Julia")
console.table(alunosEM1)
alunosEM1[12] = "leandro"
alunosEM1[13] = 1977 / 4
console.log(alunosEM1)
console.table(alunosEM1)