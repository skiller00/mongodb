const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/admin',adminController.adminPageController)
router.get('/admin/add-user',adminController.getAddUser)
router.get('/admin/show-users/:id',adminController.showUsers)

router.post('/add-user',adminController.postAddUser)
router.get('/admin/updateUser/:id',adminController.getUpdateUser)
router.post('/updateUser',adminController.saveUpdateUser)
router.post('/deleteUser',adminController.postDeleteUser)


module.exports = router