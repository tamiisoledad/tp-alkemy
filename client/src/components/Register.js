import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Register extends Component {
    constructor() {
        super();
        
    }

    async apiCall(){
        try {
            let response = await fetch('http://localhost:3001/users/create');
            let result = await response.json();
            console.log(response)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="forms">
                <Form className="formRegister" method="POST">
                    <Form.Group className="mb-3 text-light" controlId="formBasicEmail" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Introduzca su nombre" name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Introduzca su email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Introduzca una contraseña" name="password" />
                    </Form.Group>
                    <Button onClick={ () => this.apiCall()} variant="primary" type="submit">
                        Registrarme
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;