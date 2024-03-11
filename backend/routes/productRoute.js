const express = require('express');
const { route } = require('../app');
const { getAllProuducts } = require('../controllers/productControllers');
const router =  express.Router();

router.route("/products").get((getAllProuducts));

module.exports = router;