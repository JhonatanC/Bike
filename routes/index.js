var express = require('express');
var router = express.Router();

dataHome = {
  title: 'BikeApp',
  mainTitle: 'Start the journey.',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error modi sapiente aliquam libero perferendis in numquam!'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', dataHome );
});

module.exports = router;
