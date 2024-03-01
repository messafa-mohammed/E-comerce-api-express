const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const permissionController = require( '../controllers/admin/permissionController' );
const { permissionAddValidator , permissionDeleteValidator , permissionUpdateValidator } = require('../helpers/adminValidator')
const {onlyAdminAccess} = require('../middlewares/adminMiddleware')

// permission routes
router.post('/add-permission' , auth , onlyAdminAccess ,  permissionAddValidator , permissionController.addPermition );
router.get('/get-permissions' , auth , onlyAdminAccess , permissionController.getPermitions );
router.post('/delete-permission' , auth , onlyAdminAccess ,  permissionDeleteValidator , permissionController.deletePermition );
router.post('/update-permission' , auth , onlyAdminAccess ,  permissionUpdateValidator , permissionController.updatePermition );

module.exports = router;