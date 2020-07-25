const db = require('../data/db')

module.exports = autosControllers = {
    index: function(req, res) {
        res.write('Estos son los autos de nuestra concesionaria \n\n')
        db.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n\n')
            concesionaria.autos.forEach(auto => {
                res.write(auto.marca + ' ' + auto.modelo + '\n')
            })
        })
        res.end()
    }
}