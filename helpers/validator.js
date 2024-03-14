const { check } = require('express-validator');

exports.registerValidator = [
    check( 'name', "Name is required" )
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').not().isEmpty(),
];

exports.loginValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').not().isEmpty(),
];

exports.createUserValidator = [
    check( 'name', "Name is required" )
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
];

exports.updateUserValidator = [
    check( 'id', "id is required" )
        .not()
        .isEmpty(),
        check( 'name', "name is required" )
        .not()
        .isEmpty(),
];

exports.deleteUserValidator = [
    check( 'id', "id is required" )
        .not()
        .isEmpty(),
];

exports.postLikeUnlikeValidator = [
    check( 'user_id', "user_id is required" )
        .not()
        .isEmpty(),
    check( 'post_id', "post_id is required" )
        .not()
        .isEmpty(),
];

exports.postLikeCountValidator = [
    check( 'post_id', "post_id is required" )
        .not()
        .isEmpty(),
];