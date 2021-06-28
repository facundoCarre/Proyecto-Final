const fs = require('fs')
class CarritoDB {
    constructor() {
        this.count =0
        this.id = 0
        this.timestamp = new Date()
        this.productos = []
    }
   guardarEnArchivo (carritoBD){
    fs.writeFileSync('./BD/carrito.txt' , JSON.stringify(carritoBD))
   }
    leerArchivo(){
    return fs.readFileSync('./BD/carrito.txt', 'utf-8')
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
module.exports = new CarritoDB();