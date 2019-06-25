const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    const file = `./${pathname}`

    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(err)
            res.writeHead(404, { 'Content-type': 'text/plain' })
            return res.end('Not Found')
        }
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(data.toString())
    })

}).listen(8080, () => console.log('Servidor rodando...'))