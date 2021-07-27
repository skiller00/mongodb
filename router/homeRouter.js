const express= require('express')
const router = express.Router();
const homepageController= require('../controllers/homeController.js')

router.get('/',homepageController.homePageController)

module.exports = router