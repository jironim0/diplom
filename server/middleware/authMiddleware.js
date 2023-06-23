const jwt = require('jsonwebtoken')

const secret = process.env.SECRET_KEY

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'Не авторизован'})
        }

        const decoded = jwt.verify(token, secret)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: e})
    }
}