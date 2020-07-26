const db = require('../data/db')

module.exports = autosControllers = {
    index: function(req, res) {
        res.write('Estos son los autos de nuestra concesionaria \n\n')
        db.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n\n')
            concesionaria.autos.forEach(auto => {
                res.write(auto.marca + ' ' + auto.modelo + ' ' + auto.anio + '\n')

            })
            res.write('\n')
        })
        res.end()
    },
    dato: function(req, res) {
        let marcaId = req.params.id
        let datoId = req.params.dato
        db.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if (datoId.toLowerCase() == auto.color.toLowerCase() || marcaId.toLowerCase() == auto.marca) {
                    res.write(auto.marca + ' ' +
                        auto.modelo + ' ' +
                        auto.anio + ' ' + auto.color + '\n\n')
                } else if (datoId == auto.anio || marcaId.toLowerCase() == auto.marca) {
                    res.write(auto.marca + ' ' +
                        auto.modelo + ' ' +
                        auto.anio + ' ' + auto.color + '\n\n')
                }
            })
        })
        res.end('Esos son los modelos que tenemos disponibles')

    }
}