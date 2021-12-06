import React from 'react';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className="home">
            <h1>Bienvenido ....!</h1>
            <div className="monto"><p>$50000</p><button className="boton" onClick={handleShow}><i class="fas fa-plus"></i></button></div>
            <Table className="table" striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td><i class="fas fa-plus"></i></td>
                        <td>$5000</td>
                        <td>Ingreso</td>
                        <td className="icons"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-minus"></i></td>
                        <td>$3000</td>
                        <td>Egreso</td>
                        <td className="icons"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-plus"></i></td>
                        <td>$4000</td>
                        <td>Ingreso</td>
                        <td className="icons"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </Table>
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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicMonto">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese el monto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Select aria-label="Default select example">
                            <option selected disabled>Abrir para seleccionar opción</option>
                            <option value="1">Ingreso</option>
                            <option value="2">Egreso</option>
                        </Form.Select>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Modal.Footer>
        
      </Modal.Footer>
            </Modal.Body>
        </Modal>
        </div>

    )
}

export default Home;