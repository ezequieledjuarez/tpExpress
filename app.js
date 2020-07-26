//Requerimiento de express
const express = require('express')

const app = express()

const router = express.Router()

//Requerimiento de rutas
const autosRoutes = require('./routes/autosRoutes')
const sucursalesRoutes = require('./routes/sucursalesRoutes')
const marcasRoutes = require('./routes/marcasRoutes')
const homeRoutes = require('./routes/homeRoutes')

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'));

//Rutas a utilizar
app.use('/', homeRoutes)
app.use('/sucursales', sucursalesRoutes)
app.use('/marcas', marcasRoutes)
app.use('/autos', autosRoutes)

//Ruta que redirecciona si no se encuentra la ruta buscada
app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});