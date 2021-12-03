import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Login = () => {

    const [state, setState] = React.useState({
        email: "",
        password: '',
        remember: ''
    })

    function handleChange(evt) {
        let value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            let response = await fetch('http://localhost:3001/users/login', {
                method: "POST",
                body: JSON.stringify({
                    email: state.email,
                    password: state.password,
                    remember: state.remember,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            let result = await response.json();
            console.log(response)
            let form = document.querySelector(".formLogin")
            form.submit()
            return result

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="forms">
            <Form className="formlogin" onSubmit={HandleSubmit} action="/home">
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Introduzca su email" value={state.email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Introduzca su contraseña" value={state.password} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" value={state.remember} onChange={handleChange}/>
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