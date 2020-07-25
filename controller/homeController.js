const db = require('../data/db')


module.exports = homeController = {
    index: function(req, res) {
        res.write('Bienvenidos al home \n\n')
        db.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n')
        })
        res.end()
    }
}