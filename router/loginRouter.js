const express= require('express')
const router = express.Router();
const loginPageController= require('../controllers/loginController.js')

router.get('/login',loginPageController.loginPageController)
router.post('/login',loginPageController.postLoginController)

module.exports = router