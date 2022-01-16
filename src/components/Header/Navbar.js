import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../../src/assets/img/logo.svg'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function NavbarMain() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt='img'/></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
{/*                        <OverlayTrigger*/}
{/*                            overlay={<Tooltip id="tooltip-disabled" placement='bottom'>Раздел в разработке</Tooltip>}>*/}
{/*  <span className="d-inline-block">*/}
{/*Вакансии*/}
{/*  </span>*/}
{/*                        </OverlayTrigger>*/}

 <span className="d-inline-block">
Вакансии
  </span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}

export default NavbarMain