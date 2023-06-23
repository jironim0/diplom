const ApiError = require('../error/ApiError.js')

module.exports = function(err, req, res, next) {
    const status = err.status
    if(err instanceof ApiError){
        return res.status(status).json({message: err.message})
    }
 
    return res.status(500).json({message: 'Непредвиденная ошибка '})
}