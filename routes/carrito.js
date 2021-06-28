const express = require('express');
const router = express.Router();
const carrito = require('../api/carrito');

router.get('/carrito/listar/:id',permisoCarrito, (req, res) => {
    let { id } = req.params
    res.json(carrito.listarPorId(id));
});

router.post('/carrito/agregar/:id_producto',permisoCarrito, (req, res) => {
    let { id_producto } = req.params
    res.json(carrito.guardar(id_producto));
});

router.delete('/carrito/borrar/:id',permisoCarrito, (req, res) => {
    let { id } = req.params
    res.json(carrito.borrar(id));
});
function permisoCarrito (req,res,next){
    let body = req.body;
    const url = req.originalUrl
    const metodo = req.method
    if(body.permisos.administrador && body.permisos.usuario){
       next()
    }else{
        res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
    }
   }

module.exports = router;