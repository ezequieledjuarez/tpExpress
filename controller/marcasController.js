const db = require('../data/db')

module.exports = marcasController = {
    index: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let completo = []
        db.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                completo.push(auto.marca)
            })
        })
        let arrayFiltrado = Array.from(new Set(completo))
        arrayFiltrado.forEach(marca => {
            res.write(marca + '\n')
        })
        res.end('\n Tenemos a tu disposición ' + arrayFiltrado.length + 'marcas para que puedas elegir ')
    },
    marca: function(req, res) {
        let marcaId = req.params.id
        db.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if (auto.marca.toLowerCase() === marcaId.toLowerCase()) {
                    res.write(auto.marca + ' ' +
                        auto.modelo + ' ' +
                        auto.anio + '\n\n')
                }

            })

        })
        res.end('Esos son los modelos que tenemos disponibles')
    },
}