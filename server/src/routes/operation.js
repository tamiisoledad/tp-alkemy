var express = require('express');
var router = express.Router();
var {create} = require("../controllers/operationsController");
var operationValidator = require("../validations/operationValidation");

/* routes */
router.post('/create', operationValidator, create);

module.exports = router;
