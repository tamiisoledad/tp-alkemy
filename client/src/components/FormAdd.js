import React from "react";
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';


const FormAdd = (props) => {
    let modal = document.querySelector(".close");
    function close(){
        modal.addEventListener("click",() =>{
            document.querySelector("Modal").style.display = "none"
        })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
    );
}

export default FormAdd;