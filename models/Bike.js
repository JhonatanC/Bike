// Modelo
var Bike = function(id,modelo,color,ubicacion){
    this.id = id;
    this.modelo = modelo;
    this.color = color;
    this.ubicacion = ubicacion;
}

// Arreglo para guardar información
Bike.arrayBikes = [];

// Agregar una nueva bicicleta al arreglo
Bike.add = function(data){
    Bike.allBike.push(data);
}

// Buscar un elemento
Bike.searchBike = function(id){
    // Buscar y obtener ID dentro del array, y luego igualarlo al valor que se recibe por el parámetro
    let BikeID = Bike.arrayBikes.find( element => element.id == id );

    // Si existe el ID, returnarlo
    if(BikeID){
        return BikeID;
    } else {
        // Si no existe retornar el error con el número del ID
        throw new Error(`No existe una bicicleta con el id ${BikeID}`);
    }
}

// Eliminar un elemento
Bike.removeBike = function(id){
    let BikeID = Bike.arrayBikes.find( element => element.id == id );
    if(BikeID){
        Bike.allBike.splice(i, 1);
    } else {
        throw new Error(`No existe una bicicleta con el id ${BikeID}`);
    }
}

module.exports = Bike;

console.log(Bike);