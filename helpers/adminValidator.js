const { check } = require('express-validator');

exports.permissionAddValidator = [
    check('permission_name', 'Permission name is a valid email')
    .not()
    .isEmpty(),
];