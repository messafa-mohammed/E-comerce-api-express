const express = require('express');
const router  = express.Router();
const permissionController = require( '../controllers/admin/permissionController' );
const { permissionAddValidator } = require('../helpers/adminValidator')


router.post('/add-permission' , permissionAddValidator , permissionController.addPermition );


module.exports = router;