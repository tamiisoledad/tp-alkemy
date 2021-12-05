import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from 'react-router-dom';

const Register = ()=> {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: ''
      })

  
    function handleChange(evt) {
        let value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    
    }
    let navigate = useNavigate();

const MySwal = withReactContent(Swal)


    async function  HandleSubmit(e){
        e.preventDefault()
    try {
        let response = await fetch('http://localhost:3001/users/create', {
        method: "POST",
        body: JSON.stringify({
            name: state.name,
            email: state.email,
            password: state.password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        });
        let result = await response.json();
        console.log(response)
        
       MySwal.fire({
            title: <p>Te has registrado con exito!!!</p>,
            footer: 'Copyright 2021',
            didOpen: () => {
            MySwal.getConfirmButton()
            }}).then(() => {
            return navigate("/")
            
            }) 
            
        return result 
        
    } catch (error) {
        console.log(error)
    }
    
    }
        return (
            <div className="forms">
                <Form className="formRegister" onSubmit={HandleSubmit} >
                
                    <Form.Group className="mb-3 text-light" controlId="formBasicName" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Introduzca su nombre" name="name" value={state.name} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Introduzca su email" name="email" value={state.email} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Introduzca una contraseña" name="password"value={state.password} onChange={handleChange}/>
                    </Form.Group>
                    <div className="botones">
                    <Link to="/" className="btn btn-success back"><i className="fas fa-arrow-left"></i></Link>
                    <Button  variant="primary" type="submit">
                        Registrarme
                    </Button>
                    </div>
                </Form>
            </div>
        );
   
}

export default Register;