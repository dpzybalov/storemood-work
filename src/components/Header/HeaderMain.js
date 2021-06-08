import React from 'react';
import NavbarMain from "./Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function HeaderMain() {
    return (
        <div>
            <NavbarMain/>
            <Container>
                <h1>работай в storemood</h1>
                <Button>Стань частью команды</Button>
            </Container>
        </div>
    )
}

export default HeaderMain
