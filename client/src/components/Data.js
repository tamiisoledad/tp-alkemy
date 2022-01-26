import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Data = ({ userInfo }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, setState] = useState({
        quantity: "",
        categoryId: "",
        total: ""
    })

    function handleChange(evt) {
        let value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const MySwal = withReactContent(Swal)

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            let response = await fetch('http://localhost:3001/operations/create', {
                method: "POST",
                body: JSON.stringify({
                    quantity: state.quantity,
                    categoryId: state.categoryId,
                    userId: userInfo[1].id
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            let result = await response.json();

            MySwal.fire({
                title: <p>Operacion agregada exitosamente!!</p>,
                didOpen: () => {
                    MySwal.getConfirmButton()
                }
            }).then(() => {
                handleClose()
            })

            return result

        } catch (error) {
            console.log(error)
        }

    }

    async function total(){
        try {
            let datos = localStorage.getItem('datos')
            let response = await fetch('http://localhost:3001/operations/total/'+ datos);
            let data = await response.json();
            return data.data

        } catch (error) {
            console.log(error)
        }
    }


    async function resultado() {
        let result = await total();
        setState({
            ...state,
            total: result
        });
    }


    useEffect(()=>{  
        resultado()
    }, [show])
    return (
        <>
            <h1> Bienvenido
                {
                    userInfo.map((user) => " " + user.name)
                }
                !
            </h1>
            <div className="monto"><p className="totall">{state.total != "" ? state.total : 0}</p><button className="boton" onClick={handleShow}><i className="fas fa-plus"></i></button></div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}
            >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Agregar operación
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={HandleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicMonto">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el monto" name="quantity" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Select aria-label="Default select example" name="categoryId" onChange={handleChange}>
                                <option selected disabled>Abrir para seleccionar opción</option>
                                <option value="1">Ingreso</option>
                                <option value="2">Egreso</option>
                            </Form.Select>
                        </Form.Group>
                        <Button className="enviado" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Data;