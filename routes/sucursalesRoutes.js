const express = require('express')
const sucursalesController = require('../controller/sucursalesController')
const router = express.Router()

router.get('/', sucursalesController.index)
router.get('/:id', sucursalesController.sucursal)
module.exports = router