const db = require("../database/models");
const { validationResult, Result } = require('express-validator');
const { sequelize } = require("../database/models");
const { where } = require("sequelize/dist");

module.exports = {
    create: (req, res) => {
        console.log('create', req.body)
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Operation.create(
                {
                    quantity: +req.body.quantity,
                    categoryId: +req.body.categoryId,
                    userId: +req.body.userId
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
    },
    total: (req, res) => {
       let ingresos = db.Operation.sum('quantity', { where: { categoryId: 1, userId: req.params.id} })
       let egresos = db.Operation.sum('quantity', {where: {categoryId: 2, userId: req.params.id}})

        Promise.all([ingresos, egresos])
        .then((result) =>{
            let respuesta = {
                meta: {
                    status: 201,
                    total: result[0] - result[1],
                    url: '/operations/total/'+ req.params.is
                },
                data: result[0]-result[1]
            }
            res.json(respuesta)
        }).catch(error => console.log(error))
    },
    datos: (req, res) => {
        db.Operation.findAll({where: {userId: req.params.id}, include: ["category"], limit: 10,order: [['id', 'DESC']]})
        .then(result =>{
            let respuesta = {
                meta: {
                    status: 201,
                    total: result.length,
                    url: '/operations/datos/' + req.params.id
                },
                data: result
            }
            res.json(respuesta)
        }).catch(error => console.log(error))
    },
    ingresos: (req, res) => {
        db.Operation.findAll({where: {userId: req.params.id, categoryId: 1}, include: ['category'], order:[['id', 'DESC']]})
        .then(result => {
            let respuesta = {
                meta: {
                    status: 201,
                    total: result.length,
                    url: '/operations/ingresos/' + req.params.id
                },
                data: result
            }
            res.json(respuesta)
        })
        .catch(error => console.log(error))
    },
    egresos: (req, res) => {
        db.Operation.findAll({where: {userId: req.params.id, categoryId: 2}, include: ['category'], order:[['id', 'DESC']]})
        .then(result => {
            let respuesta = {
                meta: {
                    status: 201,
                    total: result.length,
                    url: '/operations/egresos/' + req.params.id
                },
                data: result
            }
            res.json(respuesta)
        })
        .catch(error => console.log(error))
    },
    update: (req, res) => {
        db.Operation.update({
            quantity: +req.body.quantity
        },{
            where: {
                id: req.params.id
            }
        })
        .then(result=>{
            let resultado = {
                meta: {
                    status: 201,
                    total: result.length,
                    url: '/operations/update/' + req.params.id
                },
                data: result
            }
            res.json(resultado)
        })
        .catch(error=> console.log(error))
    },
    destroy: (req, res) => {
        db.Operation.destroy({where:{id: req.params.id}})
        .then(() => {
            console.log("producto eliminado")
        })
        .catch(error => console.log(error))
    }

          
}