import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CityImg1 from "../../../assets/img/City/citycalendar.svg";
import CityImg2 from "../../../assets/img/City/cityexp.svg";
import CityImg3 from "../../../assets/img/City/citylocation.svg";
import CityImg4 from "../../../assets/img/City/citypuzzle.svg";
import {Row} from "react-bootstrap";
import CityItem from "./CityItem";

function City() {
    return (
        <Container className={'section'}>
            <Row>
                <h2 style={{fontSize: 44, marginBottom: 50}}>
                    работа в твоём городе
                </h2>
                <Col sm={12} md={4}>
                    <p style={{
                        fontWeight: 300,
                        fontSize: 16,
                        lineHeight: '150%'}}>
                        Мы предлагаем работу более чем в 30 регионах России и за рубежом.
                        <br/>
                        <br/>
                        80 площадок успешно работают по всей стране. Выбери локацию,
                        которая подходит именно тебе!
                    </p>
                    <Button variant="outline-danger" style={{
                        padding: '20px',
                        border: '3px solid #E84133',
                        fontFamily: 'Segoi ui',
                        fontSize: 21,
                        fontWeight: 'Bold',
                        color: 'black',
                        marginTop: 65,
                        width: '90%'
                    }}>
                        Оставить отклик
                    </Button>
                </Col>


                <Col sm={12} md={4}>
                    <CityItem src={CityImg1} text={'гибкий график'}/>
                    <CityItem src={CityImg2} text={'не требуется опыт'}/>
                </Col>

                <Col sm={12} md={4}>
                    <CityItem src={CityImg3} text={'вакансии по всей россии'}/>
                    <CityItem src={CityImg4} text={'4 специфики работы'}/>
                </Col>
            </Row>
        </Container>
    )

}

export default City