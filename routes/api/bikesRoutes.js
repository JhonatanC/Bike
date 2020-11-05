var express = require('express');
var router = express.Router();
var bikeController = require('../../controllers/api/bikeControllerApi');

// Returnar json para API
router.get('/',bikeController.index);

// Listar artículos
// router.get('/list',bikeController.list);

// Almacenar información
router.post('/store',bikeController.store);

// Vista para editar
router.get('/:id/edit',bikeController.edit);

// Actualizar información
router.post('/:id/update',bikeController.update);

// Borrar
router.post('/:id/delete',bikeController.delete);

module.exports = router;