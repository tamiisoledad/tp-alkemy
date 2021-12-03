import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
        let form = document.querySelector(".formRegister")
        form.submit()
        return result 
        
    } catch (error) {
        console.log(error)
    }
    
    }
        return (
            <div className="forms">
                <Form className="formRegister" onSubmit={HandleSubmit} action="/">
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
                    <Button  variant="primary" type="submit">
                        Registrarme
                    </Button>
                </Form>
            </div>
        );
   
}

export default Register;