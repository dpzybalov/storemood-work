import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function NavbarMain() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Storemood</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Вакансии
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}

export default NavbarMain