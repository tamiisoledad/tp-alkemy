const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');



module.exports = {
    create: async (req, res) => {
        console.log('create', req.body)
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: await bcryptjs.hash(req.body.password, 10),
                rolId: 1
            }).then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 201,
                            total: confirm.length,
                            url: 'users/create'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 201,
                            total: confirm.length,
                            url: 'users/create'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta)

            }).catch(error => res.send(error))
        } else {
            return { errors: errors.mapped() }
        }
    },
    login: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                },
                include: ['rol']
            }).then(usuario => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuario.length,
                        url: '/users/login'
                    },
                    data: usuario
                }
                res.json(respuesta);
                req.session.userLogin = {
                    id: +usuario.id,
                    name: usuario.name,
                    rolId: +usuario.rolId
                }
                if (req.body.remember) {
                    res.cookie("remember", req.session.userLogin, { maxAge: 3000000 * 60 })
                }
            }).catch(error => console.log(error))
        } else {
            return res.render('login', { errores: errors.mapped() })
        }
    },
    usuario: (req, res) => {
        db.User.findOne({where: {email: req.params.id}, include: ['rol', 'userO']})
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 201,
                        total: user.length,
                        url: '/users/' + req.params.id
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
}
/* {include: ['rol', 'userO'], attributes: ['id', 'name', 'email']} */