import React from 'react';
import Container from "react-bootstrap/Container";
import SliderImg1 from '../../../assets/img/Slider/SliderImg1.png';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Slider() {


    const overlayslides = {
        height: 400,
        backgroundColor: '#E9EEFF'
    }

    const border = {
        borderLeft: '30px solid white',
        borderRight: '30px solid white',
    }


    return (
        <div style={overlayslides}>
            <Container style={border} className={'section'}>
                <AwesomeSlider>
                    <div>
                        <Row>
                            <Col className={'w-75'} style={{paddingTop:100, paddingLeft: 150}}>
                                <h3 style={{lineHeight: '150%'}}>«Главное в Storemood — возможность получить опыт и вырасти как профессионал»</h3>
                                <p style={{fontSize: 16, color: '#5B5B5F'}}>Алиса</p>
                            </Col>
                            <Col>
                                <img src={SliderImg1} alt={'img'}/>
                            </Col>
                        </Row>
                    </div>
                </AwesomeSlider>
            </Container>
        </div>
    )
}

export default Slider