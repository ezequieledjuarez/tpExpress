const express = require('express')
const marcasController = require('../controller/marcasController')
const router = express.Router()

router.get('/', marcasController.index)
router.get('/:id', marcasController.marca)
module.exports = router