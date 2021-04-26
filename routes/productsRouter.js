let express = require('express');
const productsController = require('../Controller/productsController');
let router = express.Router();



router.get('/product' , productsController.product);
router.get('/carrito', productsController.carrito);



module.exports = router;