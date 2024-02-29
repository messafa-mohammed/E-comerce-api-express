const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const permissionController = require( '../controllers/admin/permissionController' );
const { permissionAddValidator } = require('../helpers/adminValidator')


router.post('/add-permission' ,auth, permissionAddValidator , permissionController.addPermition );


module.exports = router;