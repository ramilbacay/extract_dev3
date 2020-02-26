import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import {
    NavLink
} from "react-router-dom";

function ReactNavbar(props){
    return(
        <>
            <Navbar bg="dark" variant="dark" className="navbar">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto " >
                        {props.routes.map((value, index) => (
                            <NavLink className="nav-link" key={index} exact to={`${value['route']}`}>{value['name']}</NavLink>
                        ))
                        }
                </Nav>
                
                <Form inline>
                    <Button variant="outline-light">Username</Button>
                </Form>
                
            </Navbar>
            
        </>
    );
}

export default ReactNavbar;