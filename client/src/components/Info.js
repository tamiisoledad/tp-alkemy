import React, { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Modal, Form, Button} from 'react-bootstrap'

const Info = ({ id, quantity, categoryId, category, createdAt }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = useState({
        quantity: "",
        id: ""
    })
    function handleChange(evt) {
        let value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const MySwal = withReactContent(Swal)
    console.log(id)
    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            
            let response = await fetch('http://localhost:3001/operations/update/' + id, {
                method: "PUT",
                body: JSON.stringify({
                    quantity: state.quantity,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            let result = await response.json();

            MySwal.fire({
                title: <p>Operacion modificada exitosamente!!</p>,
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
    async function handleDestroy(e) {
        try {
            let response = await fetch('http://localhost:3001/operations/delete/' + id, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            let result = await response.json();
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async function handleQuestion() {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se podra revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'Tu operación fue eliminada.',
                'success'
              )
              handleDestroy()
            }
          })
    }


    return (
        <>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}
            >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modificar operación
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={HandleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicMonto">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el monto" name="quantity" onChange={handleChange} />
                            <Form.Control type="number" className="d-none" name="id" value={id} onChange={handleChange} />
                        </Form.Group>
                        <Button className="enviado" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal.Body>
            </Modal>
            <tr key={id}>
                <td>{categoryId === 1 ? <i className="fas fa-plus"></i> : <i className="fas fa-minus"></i>}</td>
                <td>${quantity}</td>
                <td>{category}</td>
                <td>{createdAt ? createdAt : null}</td>
                <td value={id} className="icons"><i value={id} onClick={handleShow} className="fas fa-edit"></i><i value={id} onClick={handleQuestion} className="fas fa-trash-alt"></i></td>
            </tr>
        </>
    );
}

export default Info;