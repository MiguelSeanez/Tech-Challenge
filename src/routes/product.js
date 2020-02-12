const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/createProduct', productController.create);
router.get('/getAllProducts', productController.read);
router.get('/getProductId/:id', productController.readId);
router.get('/getProductName/:name', productController.readName);
router.put('/updateProduct/:id', productController.update);
router.delete('/deleteProduct/:id', productController.delete);

module.exports = router;