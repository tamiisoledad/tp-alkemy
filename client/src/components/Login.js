import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className="forms">
        <Form className="formlogin">
            <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Introduzca su email" />
            </Form.Group>
      
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Introduzca su contraseña" />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar sesión
            </Button>
            <Link className="btn btn-success registro" to="/register" exact="true">Registrarme</Link>
        </Form>
        
        </div>
    );
}

export default Login;