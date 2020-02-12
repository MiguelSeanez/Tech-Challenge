const express = require('express');
const router = express.Router();

const purchaseController = require('../controllers/purchaseController');

router.post('/createPurchase/', purchaseController.create);
router.get('/getAllPurchases', purchaseController.read);
router.get('/getPurchaseId/:id', purchaseController.readId);

module.exports = router;