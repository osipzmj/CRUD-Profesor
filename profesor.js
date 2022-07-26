// //Archivo server donde van las extensiones de mysql, express y nodemon 
// que se instalaron anteriormente y donde se declaran las varibles para que 
// pueda funcionar el servidor correctamente y el api res tambien 
const mysql = require('mysql')
const myconn = require('express-myconnection')
const express = require('express')

const routes  = require('./routes')

const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'profesor'
}

//////////Middleware//////////
app.use(myconn(mysql, dbOptions, 'single'))
//////////Middleware para poder leer los datos json//////////
app.use(express.json())

//////////Rutas para el servidor///////////
app.get('/',(req, res) => {
    res.send('Bienvenido al CRUD de profesores')
})
app.use('/api', routes)

//////////Parte donde se encuentra corriendo el servidor//////////
app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'))
})
