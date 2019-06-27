const { MongoClient, ObjectId } = require('mongodb')

MongoClient.connect(
    'mongodb://localhost:27017/test01', 
    { useNewUrlParser: true }, 
    async (err, cliente) => {

    if (err) {
        console.error(err)
        return
    }
    
    console.log('MongoDB conectado.')
    const db = cliente.db()

    //await inserirUsuario(db)
    //await iserirPaises(db)
    //await listarUsuarios(db)
    //await filtrarPaises(db)
    //await filtrarUsuarios(db)
    //await atualizarPais(db)
    await excluirUsuario(db)
    
    cliente.close()
    console.log('MongoDB desconectado.')
})


const inserirUsuario = async (db) => {
    const collection = db.collection('usuarios')
    const { result } = await collection.insertOne({
        nome: 'Aria Stark',
        email: 'aria.s@gmail.com'
    })

    console.log('Usuário inserido.', result)
}

const iserirPaises = async (db) => {
    const collection = db.collection('paises')
    const paises = [
        { nome: 'Brasil', sigla: 'BR' },
        { nome: 'França', sigla: 'FR' }
    ]

    const { result } = await collection.insertMany(paises)
    console.log('Paises inseridos.', result)
}

const listarUsuarios = async (db) => {
    const collection = db.collection('usuarios')

    // Listar todos
    const usuarios = await collection.find({}).toArray()
    // Listar todos, retornar sem coluna _id
    // const usuarios = await collection.find({}, { projection: { _id: 0 } }).toArray()
    // Listar todos, retornar apenas coluna nome (_id retorna por default)
    // const usuarios = await collection.find({}, { projection: { nome: 1 } }).toArray()

    console.log('usuarios:', usuarios)
}

const filtrarPaises = async (db) => {
    const collection = db.collection('paises')

    // sigla = 'BR'
    const query = { sigla: 'BR' }
    // sigla = 'BR' AND nome = 'Brasil'
    //const query = { sigla: 'BR', nome: 'Brasil' }
    // sigla = 'BR' OR sigla = 'FR'
    //const query = { $or: [ { sigla: 'BR' } , { sigla: 'FR' } ] }
    // nome LIKE 'Br%'
    //const query = { nome: { $regex: 'Br.*' } }

    const paises = await collection.find(query).toArray()

    console.log('paises:', paises)
}

const filtrarUsuarios = async (db) => {
    const collection = db.collection('usuarios')

    // .* = % no SQL
    // $options: 'i' ingora case
    const query = {
        email: { $regex: '.*GMAIL.com.*', $options: 'i' }
    }

    const usuarios = await collection.find(query).toArray()
    console.log('usuarios:', usuarios)
}

const atualizarPais = async (db) => {
    const collection = db.collection('paises')

    const query = { _id: ObjectId("5d13ffc0f9120f0ff06b0261") }

    const { result } = await collection.updateOne(query, {
        $set: { nome: 'Fance' }
    })

    console.log('Pais atualizado:', result)
}

const excluirUsuario = async (db) => {
    const collection = db.collection('usuarios')

    const query = { _id: ObjectId("5d13fee6a2015911f8004cb1") }
    const { result } = await collection.deleteOne(query)

    console.log('Usuário Excluído:', result)
}