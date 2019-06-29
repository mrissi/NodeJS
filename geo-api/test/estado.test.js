const assert = require('assert')
const validarEstado = require('./../validation/estado')
const { estados } = require('./../models/mongo')

before(async () => {
    const estado = { sigla: 'TT', nome: 'Target Trust' }
    const collection =  await estados()
    const { result } = await collection.insertOne(estado)
    console.log('before', 'insertOne', result)
})

after(async () => {
    const collection =  await estados()
    const { result } = await collection.removeMany({ sigla: 'TT' })
    console.log('after', 'removeMany', result)
})

describe('validarEstado', () => {
    it('deve retornar false se o estado for vazio/null', async () => {
        const estado = null
        const resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)
    })
    it('deve retornar false se a sigla for vazia/null', async () => {
        const estado = { }
        const resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)
    })
    it('deve retornar false se a sigla for diferente de 2 caracteres', async () => {
        const estado = { sigla: 'A' }
        let resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)

        estado.sigla = 'ABC'
        resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)
    })
    it('deve retornar false se o nome for vazio/null', async () => {
        const estado = { sigla: 'TT' }
        const resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)
    })
    it('deve retornar false se a sigla já existir na coleção', async () => {
        const estado = { sigla: 'TT', nome: 'Target Trust' }
        const resultado = await validarEstado(estado)
        assert.strictEqual(resultado, false)
    })
})