const express = require('express')
const autoController = require('../controller/autosController')
const router = express.Router()

router.get('/', autoController.index)
module.exports = router