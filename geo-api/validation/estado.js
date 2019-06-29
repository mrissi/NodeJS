const { estados } = require('./../models/mongo')

const validar = async (estado) => {
    if (!estado) {
        return false
    }

    if (!estado.sigla) {
        return false
    }

    if (estado.sigla.length !== 2) {
        return false
    }

    if (!estado.nome) {
        return false
    }

    const collection = await estados()
    const query = { sigla: estado.sigla }
    const resultado = (await collection.find(query).toArray()).length

    if (resultado > 0) {
        return false
    }

    return true
}

module.exports = validar