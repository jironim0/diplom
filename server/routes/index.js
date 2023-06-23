const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const typeRouter = require('./typeRouter.js')
const typeInfoRouter = require('./typeInfoRouter.js')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/typeinfo', typeInfoRouter)

module.exports = router