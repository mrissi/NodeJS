const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/test02'

const paisSchema =  mongoose.Schema({
    nome: String,
    sigla: String,
    populacao: Number
}, { collection: 'Paises' })

const Pais = mongoose.model('pais', paisSchema)

const cafeSchema = mongoose.Schema({
    ovos: {
        type: Number,
        min: [6, 'mínimo de ovos é 6.'],
        max: [12, 'máximo de ovos é 12.']
    },
    bacon: {
        type: Number,
        required: [true, 'tem que ter bacon!']
    },
    bebida: {
        type: String,
        enum: ['café', 'chá'],
        required: function() { return this.bacon > 3 }
    }
})

const Cafe = mongoose.model('Cafe', cafeSchema)

mongoose.connect(url, { useNewUrlParser: true }, async (err) => {
    if (err) {
        console.error(err)
    }
    console.log('Mongoose conectado.')

    //await inserirPais()
    //await buscarPaises()
    //await buscarPaisPorId()
    //await atualizarPais()
    //await excluirPais()
    await inserirCafe()
})

const inserirPais = async () => {
    const brasil = new Pais({
        nome: 'Brasil',
        sigla: 'BR',
        populacao: 220000000
    })

    await brasil.save()
    console.log(brasil)
}

const buscarPaises = async () => {
    const paises = await Pais.find()
    console.log('paises:', paises)
}

const buscarPaisPorId = async () => {
    console.log(
        mongoose.mongo.ObjectID.isValid('5d1547984154390180c3e693'),
        mongoose.mongo.ObjectID.isValid('abc')
    )
    const pais = await Pais.findById('5d1547984154390180c3e693')
    console.log(pais)
}

const atualizarPais = async () => {
    // Maneira 1
    const pais = await Pais.findOne({ sigla: 'BR' })
    pais.nome = 'Brazil'
    await pais.save()
    console.log('Pais atualizado.')

    // Maneira 2
    Pais.findOneAndUpdate(
        { nome: 'Brazil' },
        { nome: 'Brasil' },
        { useFindAndModify: false }
    )
    console.log('Pais atualizado.')
}

const excluirPais = async () => {
    // Maneira 1
    const pais = await Pais.findById('5d1547984154390180c3e693')
    if (pais) {
        await pais.remove()
        console.log('Pais removido.', pais)
    }

    // Maneira 2
    //const result = await Pais.findByIdAndRemove('5d1547984154390180c3e693')    
    //console.log(result)    
}

const inserirCafe = async () => {
    const cafe = new Cafe({
        ovos: 8,
        bacon: 2
    })

    try {
        cafe.save()
        console.log('Café inserido:', cafe)
    } catch (ex) {
        console.error(ex.errors)
    }

}