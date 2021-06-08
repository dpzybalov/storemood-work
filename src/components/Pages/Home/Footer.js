import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <Container>
            <Row>
                <p>storemood</p>
                <p>storemood обучение</p>
            </Row>

            <p>8 800 555 35 35</p>

            <Row>
            <img src alt={''}/>
            <img src={''} alt={''}/>
            <img src={''} alt={''}/>
            </Row>
        </Container>
    );
}

export default Footer