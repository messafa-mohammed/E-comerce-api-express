const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const permissionController = require( '../controllers/admin/permissionController' );
const { permissionAddValidator , permissionDeleteValidator , permissionUpdateValidator } = require('../helpers/adminValidator')

// permission routes
router.post('/add-permission' , auth , permissionAddValidator , permissionController.addPermition );
router.get('/get-permissions' , auth , permissionController.getPermitions );
router.post('/delete-permission' , auth , permissionDeleteValidator , permissionController.deletePermition );
router.post('/update-permission' , auth , permissionUpdateValidator , permissionController.updatePermition );

module.exports = router;