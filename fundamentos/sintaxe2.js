/**
 * Tutorial Node.js
 * Uso de chaves nas estruturas de controle
 */
// Nas estruturas de controle condiconal e nos laços de repetições
// podemos omitir as chaves, porém só uma linha de código é vinculada


let media = 9


if (media <= 5){
    console.log("Reprovado")
    console.log("Não emitir certificado")
} else if (media >=5 && media <= 8){
    console.log("Em estudo")
    console.log("Não emitir certificado")
} else {
    console.log("APROVADO COM SUCESSO")
    console.log("Emitir certificado!")
}