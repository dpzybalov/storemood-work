import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ReactComponent as Privelegeimg1} from '../../../assets/img/Privilege/privelege1.svg'
import {ReactComponent as Privelegeimg2} from '../../../assets/img/Privilege/privelege2.svg'
import {ReactComponent as Privelegeimg3} from '../../../assets/img/Privilege/privelege3.svg'

function Privilege() {
    return (
        <Container>
            <h2>преимущества работы в storemood</h2>
            <Row>
                <Col>
                    <Privelegeimg1/>
                    <h3>Заголовок</h3>
                    <p>Описание</p>
                </Col>


                <Col>
                    <Privelegeimg2/>
                    <h3>Заголовок</h3>
                    <p>Описание</p>
                </Col>


                <Col>
                    <Privelegeimg3/>
                    <h3>Заголовок</h3>
                    <p>Описание</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Privilege