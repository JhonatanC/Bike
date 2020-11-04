// Importar modelo
var Bike = require('../../models/bike');

// Crear funciones

// Si la respuesta es Ok (200), agregar la información al arreglo
exports.index = function(request,response){
    response.status(200).json({
        bikes: Bike.arrayBikes
    });
}

// exports.list = function(request,response){
//     var bikes = Bike.arrayBikes;
//     response.render('/bikes/index', {bikes});
// }

// exports.create = function(request,response){
//     response.render('bikes/create');
// }

exports.store = function(request,response){
    // Revisando que recibimos por el request
    console.log(request.body);
    
    // Obtener los valores por separados en variables
    var id = request.body.id;
    var modelo = request.body.modelo;
    var color = request.body.color;
    var ubicacion = [request.body.lat, request.body.lng];

    // Crear nueva instancia del objeto (Modelo Bike), para recibir la información
    var bike = new Bike(id,modelo,color,ubicacion);

    Bike.add(bike);

    response.redirect('/list');
}

exports.edit = function(request, response){
    var bike = Bike.searchBike(request.params.id);
    response.render('bikes/edit', {bike});
}

exports.update = function(){

}

exports.delete = function(request,response){
    Bike.removeBike(request.body.id);
    response.redirect('/list');
}