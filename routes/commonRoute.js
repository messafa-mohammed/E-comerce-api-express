const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const { categoryAddValidator } = require('../helpers/adminValidator')
const categoryController = require('../controllers/categoryController')


// category routes
router.post('/add-category', auth , categoryAddValidator , categoryController.addCategory )

module.exports = router;