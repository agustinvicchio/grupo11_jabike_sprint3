let express = require('express');
const productsController = require('../Controller/productsController');
let router = express.Router();



router.get('/product' , productsController.product);




module.exports = router;