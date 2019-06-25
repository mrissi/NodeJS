// Importar somente um método do modulo
const { somar, subtrair, dividir, multiplicar } = require('./calculadora')
const upperCase = require('upper-case')

console.log(upperCase('Hello, world!'))

console.log(`2 + 4 = ${somar(2, 4)}`)
console.log(`4 - 2 = ${subtrair(4, 2)}`)
console.log(`4 / 2 = ${dividir(4, 2)}`)
console.log(`2 * 4 = ${multiplicar(2, 4)}`)