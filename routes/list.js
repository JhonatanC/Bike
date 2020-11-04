var express = require('express');
var router = express.Router();

var Bike = require('../models/bike');

router.get('/', function(request, response, next) {
    var bikes = Bike.arrayBikes;
    response.render('bikes/index', {bikes});
});

module.exports = router;