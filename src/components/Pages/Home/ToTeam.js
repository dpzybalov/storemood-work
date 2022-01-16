import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactPlayer from "react-player";
import ButtonOutline from "../../ButtonOutlin";

function ToTeam() {
    return (
        <Container className={'section toteam'}>
            <h2 style={{fontSize: 44, marginBottom: 50}}>присоединяйся к команде</h2>
            <Row>
                <Col md={6}
                >
                    <p className={'w-75'} style={{marginBottom: 30}}><strong>Storemood.com</strong> — это уникальный онлайн-сервис продаж фотографий на территории России и за
                        рубежом.
                    </p>
                    <p className={'w-75'} style={{marginBottom: 30}}>Проект <strong>Storemood.com</strong> постоянно растёт и расширяет производство, поэтому мы набираем команду,
                        которая будет помогать в своевременном решении поставленных задач.
                    </p>
                    <p className={'w-75'} style={{marginBottom: 30}}>Сделай выбор в пользу самого крупного фотосервиса в стране!
                    </p>
                    <ButtonOutline text={'Оставить отклик'}>Вакансии в Storemood</ButtonOutline>
                </Col>

                <Col sm={12} md={6}>
                    <ReactPlayer style={{width: '100%'}} url='https://www.youtube.com/watch?v=Plo6ct9OtGw' />
                </Col>
            </Row>
        </Container>
    );
}

export default ToTeam