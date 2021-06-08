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
        <Container>
            <Row>
                <Col>
                    <h2>
                        работа в твоём городе
                    </h2>
                    <p>
                        Мы предлагаем работу более чем в 30 регионах России и за рубежом.
                        80 площадок успешно работают по всей стране. Выбери локацию,
                        которая подходит именно тебе!
                    </p>
                    <Button>
                        Оставить отклик
                    </Button>
                </Col>


                <Col>
                    <Row>
                        <CityItem src={CityImg1} text={'гибкий график'}/>
                        <CityItem src={CityImg2} text={'гибкий график'}/>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <CityItem src={CityImg3} text={'гибкий график'}/>
                        <CityItem src={CityImg4} text={'гибкий график'}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default City