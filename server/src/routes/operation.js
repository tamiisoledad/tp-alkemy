var express = require('express');
var router = express.Router();
var {create, total, datos, ingresos, egresos, update, destroy} = require("../controllers/operationsController");
var operationValidator = require("../validations/operationValidation");

/* routes */
router.post('/create', operationValidator, create);
router.get('/total/:id', total);
router.get('/datos/:id', datos);
router.get('/ingresos/:id', ingresos);
router.get('/egresos/:id', egresos);
router.put('/update/:id', update);
router.delete('/delete/:id', destroy);


module.exports = router;
