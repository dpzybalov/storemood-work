import React from 'react';
import NavbarMain from "./Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HeaderBg from '../../assets/img/HeaderBg.jpg'
import HeaderItem from '../../assets/img/HeaderItem.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './HeaderMain.css'

const Style = {
    fontFamily: 'Bebas Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 72,
    lineHeight: '110%',
    color: '#282828',
    marginBottom: 60,
}

function HeaderMain() {
    return (
        <div>
            <NavbarMain/>
            <div style={{backgroundImage: `url(${HeaderBg})`, minHeight: 500, backgroundSize: 'cover'}}>
                <Container>
                    <Row>
                        <Col style={{marginTop: 75}}>
                            <h1 style={Style}> работай <br/> в storemood</h1>
                            <Button variant="dark" style={{
                                padding: 25,
                                fontSize: 17,
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                fontFamily: 'Segoi ui',
                                borderRadius: 0
                            }}>
                                Стань частью команды
                            </Button>
                        </Col>


                        <Col className={'d-none d-sm-block'}>
                            <img style={{bottom: -25, position: 'relative'}} src={HeaderItem} alt={'img'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HeaderMain
