//Creación de archivo para routes para colocar las rutas del servidor
const express = require('express')
const routes = express.Router()

//Listado de todos los profesores 
routes.get('/',(req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM profesor',(err,rows) =>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

//Listar un profesor por id
routes.get('/:id',(req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM profesor WHERE _id = ?',[req.params.id],(err,rows) => {
            if(err) return res.send(err)
            
            res.json(rows);
        })
    })
})

//Agregar un profesor
routes.post('/',(req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('INSERT INTO profesor set ?',[req.body],(err,rows) => {
            if(err) return res.send(err)
            
            res.send('Profesor registrado con exito')
        })
    })
})


//Eliminar un profesor
routes.delete('/:id',(req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('DELETE FROM profesor WHERE _id = ?',[req.params.id],(err,rows) => {
            if(err) return res.send(err)
            
            res.send('Profesor eliminado con exito')
        })
    })
})

//Actualizar un profesor
routes.put('/:id',(req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('UPDATE profesor SET ? WHERE _id = ?',[req.body, req.params.id],(err,rows) => {
            if(err) return res.send(err)
            
            res.send('Datos actualizados con exito')
        })
    })
})

module.exports = routes