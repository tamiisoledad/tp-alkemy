const {check, body} = require("express-validator");
const db = require("../database/models");

module.exports = [
    body("email").custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        }).then((user) => {
            if(user){
                return Promise.reject("El email ya se encuentra registrado")
            }
        });
    }),
    check("name")
    .notEmpty().withMessage("Obligatorio").bail()
    .isLength({min: 2}).withMessage("El nombre debe tener minimo 2 caracteres").bail(),

    check("email")
    .isEmail().withMessage("Debes introducir un email valido").bail(),

    check("password")
    .isLength({min: 8}).withMessage("Debes introducir minimo 8 caracteres").bail()
]