import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function ButtonOutline(props) {
    return (
        <Button variant="outline-danger" style={{
            padding: '20px',
            border: '3px solid #E84133',
            fontFamily: 'Segoi ui',
            fontSize: 21,
            fontWeight: 'Bold',
            color: 'black',
            marginTop: 50,
            width: '90%'
        }}>
            {props.text}
        </Button>
    );
}

export default ButtonOutline