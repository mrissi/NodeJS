const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017/geo_db'

let db
const abrirConexao = async () => {
    if (db) return db

    db = (await MongoClient.connect(url, {useNewUrlParser: true })).db()
    return db
}

const estados = async () => {
    await abrirConexao()
    return db.collection('estados')
}

const cidades = async () => {
    await abrirConexao()
    return db.collection('cidades')
}

module.exports = { estados, cidades }