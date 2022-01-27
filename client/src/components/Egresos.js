import React, {useState, useEffect} from "react";
import { Table, Navbar, Container, Nav } from "react-bootstrap";
import Content from './Content';
import { Link } from "react-router-dom";

const Egresos = () => {
        const [state, setState] = useState({
            datos: []
        })

        async function userMyApi() {
            try {
                let infouser = localStorage.getItem('datos')
                let response = await fetch('http://localhost:3001/operations/egresos/' + infouser);
                let data = await response.json();
                console.log(data.data)
                let info = data.data.map(dato => {
    
                    let item = {
                        id: dato.id,
                        quantity: dato.quantity,
                        category: dato.category,
                        categoryId: dato.categoryId,
                        createdAt: dato.createdAt.slice(0, 10)
                    }
                    return item
                })
                setState({
                    datos: [
                        ...state.datos,
                        ...info
                    ]
                })
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() => {
            userMyApi()
        }, [])
    


    return (
        <>
        <div className="home" >
            <Navbar collapseOnSelect className='navbar w-100' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Alkemy-Challenge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"><Link className="btn btn-dark"  to="/ingresos" exact="true">Ingresos</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className="btn btn-dark" to="/egresos" exact="true">Egresos</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>Listado de egresos</h1>
            </div>
            <Table className="table" striped bordered hover variant="dark">
                <tbody>
                    {<Content
                        datos={state.datos}
                    />}
                </tbody>
            </Table>
        </>
    );
}
export default Egresos;