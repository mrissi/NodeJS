const auth = (req, res, next) => {
    const { authorization } = req.headers
    
    if (authorization) {
        const encoded = authorization.split(' ')[1]
        const credential = Buffer.from(encoded, 'base64').toString()
        const user = credential.split(':')[0]
        const pass = credential.split(':')[1]

        if (user === 'admin' && pass === 'root') {
            return next()
        }
    }

    res.sendStatus(401)
}

module.exports = auth