const express = require('express')
const autoController = require('../controller/autosController')
const marcaController = require('../controller/marcasController')
const router = express.Router()

router.get('/', autoController.index)
router.get('/:id', marcasController.marca)
router.get('/:id/:dato', autoController.dato)

module.exports = router