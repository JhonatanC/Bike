var map = L.map('map').setView([3.4519257, -76.5358253], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$.ajax({
    data: "json",
    url: "/api/bikes",
    success: function(result){
        console.log(result);
        result.bikes.forEach( function(bike) {
            L.marker( bike.ubicacion, {title: bike.id} ).addTo(map);
        });
    },
    error: function(error){
        console.log('Error');
    }
});





