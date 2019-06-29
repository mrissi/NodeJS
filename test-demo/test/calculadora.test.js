const assert = require('assert')
const calculadora = require('./../calculadora')

describe('calculadora', () => {
    describe('somar', () => {
        it('deve retornar a soma de a + b', () => {
            // arrange
            const a = 5
            const b = 18

            // act
            const resultado = calculadora.somar(a, b)

            // assert
            assert.strictEqual(resultado, (a + b))
        })
    })
    describe('deve retornar a subtração a - b', () => {
        // arrange
        const a = 15
        const b = 7

        // act
        const resultado = calculadora.subtrair(a, b)
        const resultado2 = calculadora.subtrair(b, a)

        // assert
        assert.strictEqual(resultado, 8)
        assert.strictEqual(resultado2, -8)
    })
})