const db = require('../data/db')

module.exports = concesionariaController = {
    index: function(req, res) {
        res.write('Sucursales de nuestra concesionaria \n\n')
        db.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n')
            res.write(concesionaria.direccion + '\n')
            res.write(concesionaria.telefono + '\n\n')

        })
        res.end()
    },
    sucursal: function(req, res) {
        let sucId = req.params.id
        db.forEach(concesionaria => {
            if (concesionaria.sucursal.toLowerCase() == sucId.toLowerCase()) {
                res.write(concesionaria.sucursal + '\n')
                res.write(concesionaria.direccion + '\n')
                res.write(concesionaria.telefono + '\n\n')
                res.write('Autos disponibles en la sucursal \n\n')
                concesionaria.autos.forEach(auto => {
                    res.write(auto.marca + '\n')
                    res.write(auto.modelo + '\n\n')
                })
                res.end('Cantidad de autos disponibles: ' + concesionaria.autos.length)
            }
        })
        res.end('No tenemos sucursales en ' + sucId)
    },
}