const {check} = require("express-validator");
const db = require("../database/models");

module.exports = [
    check("quantity")
    .notEmpty().withMessage("Obligatorio").bail(),

    check("categoryId")
    .notEmpty().withMessage("Debes seleccionar un valor")
]