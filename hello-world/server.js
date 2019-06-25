const http = require('http')
const url = require('url')
const fs = require('fs')
const dataAtual = require('./dataAtual')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    const { query } = url.parse(req.url, true)
    console.log(req.url, query)

    fs.readFile('./teste.txt', (err, data) => {
        if (err) {
            console.error(err)
            return res.end('erro na leitura.')
        }
        res.end(data.toString())
    })

}).listen(8080, () => console.log('Server running...'))

console.log('after listen', dataAtual.dataAtual(), dataAtual.tt())