import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
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
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            let result = await response.json();
            navigate("/home")

        return result
            
        } catch (error) {
            console.log(error)
        }
    }
    localStorage.setItem('user', state.email);

    return (
        <div className="forms">
            <Form className="formlogin" onSubmit={HandleSubmit} >
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Introduzca su email" name="email" value={state.email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Introduzca su contraseña" name="password" value={state.password}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" name="remember" value={state.remember} onChange={handleChange}/>
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