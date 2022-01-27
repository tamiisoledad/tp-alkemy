var express = require('express');
var router = express.Router();
var {create, login, usuario} = require("../controllers/usersController");
var registerValidator = require("../validations/registerValidation");
var loginValidator = require("../validations/loginValidation");

/* routes */
router.post('/create', registerValidator, create);
router.post('/login',loginValidator, login);
router.get('/:id', usuario);

module.exports = router;
