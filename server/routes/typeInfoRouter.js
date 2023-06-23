const Router = require('express')
const router = new Router()
const typeInfoController = require('../controllers/typeInfoController.js')

router.post('/', typeInfoController.create)
router.get('/', typeInfoController.getAll)
router.patch('/update', typeInfoController.update)

module.exports = router