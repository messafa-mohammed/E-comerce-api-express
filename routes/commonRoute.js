const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/authMiddleware')
const { categoryAddValidator , categoryDeleteValidator , categoryUpdateValidator , postCreateValidator , postUpdateValidator , postDeleteValidator} = require('../helpers/adminValidator')
const categoryController = require('../controllers/categoryController')
const postController = require('../controllers/postController')
const {createUserValidator , updateUserValidator , deleteUserValidator , postLikeUnlikeValidator , postLikeCountValidator} = require('../helpers/validator')
const userController = require('../controllers/userController')
const likeController = require('../controllers/likeController')
 

// category routes
router.post('/add-category', auth , categoryAddValidator , categoryController.addCategory )
router.get('/get-categories', auth , categoryController.getCategories )
router.post('/delete-category', auth ,categoryDeleteValidator , categoryController.deleteCategory )
router.post('/update-category', auth ,categoryUpdateValidator , categoryController.updateCategory )

// post routes
router.post('/create-post', auth , postCreateValidator , postController.createPost)
router.get('/get-posts', auth , postController.getPosts)
router.post('/delete-post', auth , postDeleteValidator , postController.deletePost)
router.post('/update-post', auth , postUpdateValidator , postController.updatePost)

//user routes
router.post('/create-user',auth , createUserValidator , userController.createUser)
router.get('/get-users',auth , userController.getUsers)
router.post('/update-user',auth , updateUserValidator , userController.updateUser)
router.post('/delete-user',auth , deleteUserValidator , userController.deleteUser)

//like and  unlike route
router.post('/post-like',auth , postLikeUnlikeValidator , likeController.postLike)
router.post('/post-unlike',auth , postLikeUnlikeValidator , likeController.postUnLike)
router.post('/post-like-count',auth , postLikeCountValidator , likeController.postLikeCount)


module.exports = router;