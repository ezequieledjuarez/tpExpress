const fs = require('fs')

module.exports =
    db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))