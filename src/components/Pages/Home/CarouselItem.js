import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SliderImg1 from "../../../assets/img/Slider/SliderImg1.png";

function CarouseItem(props) {
    return (
        <div>
            <Row>
                <Col className={'w-75'}>
                    <h3>{this.props.head}</h3>
                    <p>{this.props.descript}</p>
                </Col>
                <Col className={'w-25'}>
                    <img src={this.props.src} alt={'img'}/>
                </Col>
            </Row>
        </div>
    );
}

export default CarouseItem