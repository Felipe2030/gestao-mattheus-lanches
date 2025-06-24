const express = require('express')
const router = express.Router()

// Mercadorias
const merchandiseController = require('../controllers/merchandiseController')
router.get('/home/merchandise', merchandiseController.index)
router.post('/home/merchandise/create', merchandiseController.create);
router.post('/home/merchandise/update/:id', merchandiseController.update);
router.post('/home/merchandise/delete/:id', merchandiseController.delete);

// Produtos
const productsController = require('../controllers/productsController')
router.get('/home/products', productsController.index)
router.post('/home/products/create', productsController.create);
router.post('/home/products/update/:id', productsController.update);
router.post('/home/products/delete/:id', productsController.delete);



const mainController = require('../controllers/mainController')
router.get('/home/products', mainController.products)
router.get('/home/reports', mainController.reports)
router.get('/home/buy', mainController.buy)
router.get('/home/sell', mainController.sell)
router.get('/', mainController.login)

module.exports = router