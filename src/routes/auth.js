const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const {authRequired} = require('../middleware/validateToken')
const {validateSchema} = require('../middleware/validator');
const {registerSchema} = require('../schemas/auth');
const {loginSchema} = require('../schemas/login');


router.post('/signup', validateSchema(registerSchema),authController.signup);

router.post('/login', validateSchema(loginSchema),authController.login);

router.post('/logout', authController.logout);

router.get("/profile", authRequired ,authController.profile);

router.get("/verify", authController.verify);

module.exports = {
    router
};
