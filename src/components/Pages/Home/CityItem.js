import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CityItem(props) {
    const row = {
        marginBottom:80
    }
    return (
        <Row style={row}>
            <Col lg={3}>
                <img src={props.src} alt={'img'}/>
            </Col>

            <Col lg={9}>
                <h3 className={'align-middle'}>{props.text}</h3>
            </Col>
        </Row>
    )
}

export default CityItem