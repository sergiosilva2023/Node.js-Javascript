/**
 * Estrutura de dados
 * Objetos
 */

const funcionario1 = {}
//console.log(typeof(funcionario1))
funcionario1.nome = "Sérgio"
funcionario1.cargo = "Aluno"
funcionario1.email = "sergio.web100@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@sergiosilva35510"
// listar dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar dados na estrutura
funcionario1.nome = "Sérgio da Silva"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)
const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@email.com",
    salario: 400000
}
console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Gothan City",
    estado: "New Jersey"
}
console.log(endereco1)
const funcionario3= {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@email.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4= {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@email.com",
    salario: 2000,
    ...endereco1 // spread operator
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@email.com",
    salario: 375000,
    armadura:{ // abaixo desta linha é criado um objeto dentro da estrutura de outro objeto
        versao: "Mark II",
        ano: 2010,
        reactor: "Arc 01"
    },
    suitUp:() => { // função anónima arrow function
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp()