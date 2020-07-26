const db = require('../data/db')


module.exports = homeController = {
    index: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write('Bienvenidos al home \n\n')
        res.write('Buscanos en nuestras sucursulaes ubicadas en: \n\n')
        db.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n')
            res.write(concesionaria.direccion + '\n\n')
        })
        res.end()
    }
}