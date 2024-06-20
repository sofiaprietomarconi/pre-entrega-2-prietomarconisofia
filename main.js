class Productos {
    constructor (sucursal, nombre, categoria, precio ){
        this.sucursal=sucursal 
        this.nombre=nombre
        this.categoria=categoria
        this.precio=precio
    }

    calcularIva (){
        let resultado = (this.precio * 0.21) 
        return resultado + this.precio 
    }
}

let producto1 = new Productos ("Nueva Cordoba", "Desodorante", "Higiene Personal", 2500)
let producto2 = new Productos ("Centro", "Protector Solar Facial", "Dermocosmetica", 25000)
let producto3 = new Productos ("Av. Sabattini", "Balanza", "Electrosalud", 80000)
let producto4 = new Productos ("Cerro de las Rosas", "Jabon", "Higiene Personal", 3000)
let producto5 = new Productos ("Villa Allende", "Tensiometros", "Electrosalud", 50000)

let arrayProductos = [ producto1, producto2, producto3, producto4, producto5]

let entrada = prompt ("¿QUE BARRIO ES DE SU COMODIDAD?")

let arrayBusquedaBarrio = arrayProductos.find( item => item.sucursal === entrada )


if (arrayBusquedaBarrio != undefined) {
    console.log ("TENEMOS UNA SUCURSAL EN EL BARRIO SELECCIONADO!")
    let categoriaFilter = prompt ("¿En que categoria desea comprar? Higiene Personal - Dermocosmetica - Electrosalud")
    let arrayBusquedaCategoria = arrayProductos.filter (item => item.categoria === categoriaFilter)

    if (arrayBusquedaCategoria.length > 0){
        console.log ("Los productos que se encuentran en la categoria seleccionada son: " )
        arrayBusquedaCategoria.forEach (producto => {
            console.log ( "El/los producto/s con los que cuenta la categoria son: " , producto.nombre, " y su precio con iva es: ", producto.calcularIva())
        })
    } else {
        console.log ("No contamos con la categoria seleccionada!")
    }
}else{
    console.log("NO TENEMOS SUCURSAL EN EL BARRIO SELECCIONADO:(")
}

