import React from 'react';
import Col from "react-bootstrap/Col";

export default function StepsItem(props) {
    const privh = {
    color: '#E84133',
    margin: '35px 0 15px 0',
}
    return (
        <Col style={{textAlign: 'center'}}>
            <img src={props.src} alt="img"/>
            <h3 style={privh}>{props.header}</h3>
            <p>{props.description}</p>
        </Col>
    );
};