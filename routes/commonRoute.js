const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const { categoryAddValidator , categoryDeleteValidator , categoryUpdateValidator} = require('../helpers/adminValidator')
const categoryController = require('../controllers/categoryController')


// category routes
router.post('/add-category', auth , categoryAddValidator , categoryController.addCategory )
router.get('/get-categories', auth , categoryController.getCategories )
router.post('/delete-category', auth ,categoryDeleteValidator , categoryController.deleteCategory )
router.post('/update-category', auth ,categoryUpdateValidator , categoryController.updateCategory )

module.exports = router;