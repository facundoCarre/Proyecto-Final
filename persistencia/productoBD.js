const fs = require('fs')
class ProductoBD {
    constructor() {
    }
   guardar (producto){
    fs.writeFileSync('./BD/producto.txt', JSON.stringify(producto))
   }
    leerArchivo(){
    return fs.readFileSync('./BD/producto.txt', 'utf-8')
   }
   borrar (id){
    let respuesta = {}
    const produtoEliminado = this.productos.filter(a => a.id == id);
    if (produtoEliminado.length > 0){
        respuesta = produtoEliminado
        this.productos = this.productos.filter(a => a.id != id)
    }else{
        respuesta.error = 'Producto no encontrado para borrar'
    }
    return respuesta
    }
}

// exporto una instancia de la clase
module.exports = new ProductoBD();