import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ReactComponent as Privelegeimg1} from '../../../assets/img/Privilege/privelege1.svg'
import {ReactComponent as Privelegeimg2} from '../../../assets/img/Privilege/privelege2.svg'
import {ReactComponent as Privelegeimg3} from '../../../assets/img/Privilege/privelege3.svg'

const privh = {
    color: '#E84133',
    margin: '35px 0 15px 0',
}

function Privilege() {
    return (
        <Container className={'section'}>
            <h2 style={{fontSize: 44, marginBottom: 50}}>преимущества работы в storemood</h2>
            <Row>
                <Col style={{textAlign: 'center'}}>

                    <Privelegeimg1/>
                    <h3 style={privh}>Команда профессионалов</h3>
                    <p>Дружный коллектив, специалисты, которые всегда готовы помочь</p>
                </Col>


                <Col style={{textAlign: 'center'}}>
                    <Privelegeimg2/>
                    <h3 style={privh}>Обучающие курсы</h3>
                    <p>Платформа онлайн-обучения подготовит тебя к работе</p>
                </Col>


                <Col style={{textAlign: 'center'}}>
                    <Privelegeimg3/>
                    <h3 style={privh}>Карьерный рост</h3>
                    <p>Интересные и амбициозные задачи помогут стать лучшим в своём деле</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Privilege