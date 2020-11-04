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
    Bike.arrayBikes.push(data);
}

var a = new Bike(1,'Clásica','Madera',[3.4476327,-76.5412732]);
var b = new Bike(2,'Urbana','Naranja',[3.4519257,-76.5358253]);

Bike.add(a);
Bike.add(b);

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
    for(var i = 0; i < Bike.arrayBikes.length; i++){
        if(Bike.arrayBikes[i].id == id){
            Bike.arrayBikes.splice(i, 1);
            break;
        }
    }
}

module.exports = Bike;

