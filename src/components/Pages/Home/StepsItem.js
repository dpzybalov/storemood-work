import React from 'react';
import Col from "react-bootstrap/Col";

export default function StepsItem(props) {
    return (
        <Col>
            <img src={props.src} alt="img"/>
            <h4>{props.header}</h4>
            <p>{props.description}</p>
        </Col>
    );
};