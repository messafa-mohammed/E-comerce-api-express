const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const permissionController = require( '../controllers/admin/permissionController' );
const roleController = require('../controllers/admin/roleController')
const { permissionAddValidator , permissionDeleteValidator , permissionUpdateValidator , storeRoleValidator } = require('../helpers/adminValidator')
const {onlyAdminAccess} = require('../middlewares/adminMiddleware')

// permission routes
router.post('/add-permission' , auth , onlyAdminAccess ,  permissionAddValidator , permissionController.addPermition );
router.get('/get-permissions' , auth , onlyAdminAccess , permissionController.getPermitions );
router.post('/delete-permission' , auth , onlyAdminAccess ,  permissionDeleteValidator , permissionController.deletePermition );
router.post('/update-permission' , auth , onlyAdminAccess ,  permissionUpdateValidator , permissionController.updatePermition );

// role routes
router.post('/store-role' , auth , onlyAdminAccess , storeRoleValidator , roleController.storeRole );
router.get('/get-roles' , auth , onlyAdminAccess , roleController.getRoles );




module.exports = router;