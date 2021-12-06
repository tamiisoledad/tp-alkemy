const db = require("../database/models");
const { validationResult } = require('express-validator');

module.exports = {
    create: (req, res) => {
        console.log('create', req.body)
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Operation.create(
                {
                    quantity: +req.body.quantity,
                    categoryId: +req.body.categoryId
                }
            )
                .then(confirm => {
                    let respuesta;
                    if (confirm) {
                        respuesta = {
                            meta: {
                                status: 201,
                                total: confirm.length,
                                url: 'operations/create'
                            },
                            data: confirm
                        }
                    } else {
                        respuesta = {
                            meta: {
                                status: 201,
                                total: confirm.length,
                                url: 'operations/create'
                            },
                            data: confirm
                        }
                    }
                    res.json(respuesta);
                })
                .catch(error => res.send(error))
        } else {
            return { errors: errors.mapped() }
        }
    }
}