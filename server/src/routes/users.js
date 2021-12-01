var express = require('express');
var router = express.Router();
var {create} = require("../controllers/usersController");
var registerValidator = require("../validations/registerValidation");

/* routes. */
router.post('/create', registerValidator, create);

module.exports = router;
