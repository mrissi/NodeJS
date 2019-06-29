const assert = require('assert')

describe('Array', () => {
    describe('indexOf', () => {
        it('deve retornar -1 quando o item não for encontrado', () => {
            const array = [ 1, 2, 3 ]
            const item = 9
            const index = array.indexOf(item)
            assert.strictEqual(index, -1)
        })
        it('deve retornar o indice do primeiro item quando encontrado', () => {
            const array = [ 'a', 'b', 'c', 'a', 'c']
            const item = 'a'
            const index = array.indexOf(item)
            assert.strictEqual(index, 0)
        })
    })
    describe('lastIndexOf', () => {
        it('deve retornar o indice do último item quando encontrado', () => {
            const array = [ 'a', 'b', 'c', 'a', 'c']
            const item = 'a'
            const index = array.lastIndexOf(item)
            assert.strictEqual(index, 3)
        })
    })
})