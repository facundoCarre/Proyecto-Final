const express = require('express');
const router = express.Router();
const productos = require('../api/productos');

router.get('/productos/listar', (req, res) => {
    res.json(productos.listar());
});

router.get('/productos/listar/:id',permisoAdministrador, permisoUsuario, (req, res) => {
    let { id } = req.params;
    if(id){
        res.json(productos.listarPorId(id));
    }else{
        res.json(productos.listar());
    }

});

router.post('/productos/guardar',permisoAdministrador , (req, res) => {
    let producto = req.body;
    res.json(productos.guardar(producto));
});

router.put('/productos/actualizar/:id', permisoAdministrador ,(req, res) => {
    let { id } = req.params
    let producto = req.body
    res.json(productos.actualizar(id, producto));
});

router.delete('/productos/borrar/:id', permisoAdministrador,  (req, res) => {
    let { id } = req.params;
    res.json(productos.borrar(id));
});


function permisoAdministrador (req,res,next){
 let body = req.body;
 const url = req.originalUrl
 const metodo = req.method
 if(body.permisos.administrador){
    next()
 }else{
     res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
 }
}
function permisoUsuario (req,res,next){
    let body = req.body;
    if(body.permisos.usuario){
       next()
    }else{
        res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
    }
   }
module.exports = router;