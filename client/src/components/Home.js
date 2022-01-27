import React, { useEffect } from 'react';
import { useState } from 'react';
import Data from './Data';
import TableInfo from './TableInfo';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Ingresos from './Ingresos';

const Home = () => {
    const [state, setState] = useState({
        userInfo: [{ name: "", id: "" }]
    })

    async function apiCall() {
        try {
            let infoUser = localStorage.getItem('user');
            let response = await fetch('http://localhost:3001/users/' + infoUser);
            let data = await response.json();
            localStorage.setItem('datos', data.data.id)
            return data.data

        } catch (error) {
            console.log(error)
        }
    }

    async function userData() {
        let user = await apiCall();
        setState({
            userInfo: [
                ...state.userInfo,
                {
                    name: user.name,
                    id: user.id
                }
            ]
        })
    }

    useEffect(() => {
        userData()
    }, [])


    function handleHome(evt) {
        
        
    }

    return (
        <div className="home" >
            <Navbar collapseOnSelect className='navbar w-100' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Alkemy-Challenge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="btn btn-dark"  to="/ingresos" exact="true">Ingresos</Link></Nav.Link>
                            <Nav.Link ><Link className="btn btn-dark" to="/egresos" exact="true">Egresos</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Data
                userInfo={state.userInfo}
            />
            <TableInfo />

        </div>

    )
}

export default Home;