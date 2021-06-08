import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CityItem(props) {
    return (
        <Row>

            <Col lg={3}>
                <img src={props.src} alt={'img'}/>
            </Col>

            <Col lg={9}>
                {props.text}
            </Col>
        </Row>
    )
}

export default CityItem