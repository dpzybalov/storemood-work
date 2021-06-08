import React from 'react';
import StepsItem from "./StepsItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import StepImg1 from '../../../assets/img/Step/StepImg1.svg';
import StepImg2 from '../../../assets/img/Step/StepImg2.svg';
import StepImg3 from '../../../assets/img/Step/StepImg3.svg';
import StepImg4 from '../../../assets/img/Step/StepImg4.svg';

function Steps() {
    return (
        <Container>
            <h2>4 шага до работы</h2>
            <Row>
                <StepsItem src={StepImg1} header={'регистрация'} description={'выбор вакансии в вашем городе'}/>
                <StepsItem src={StepImg2} header={'собеседование'} description={'личная встреча или по Skype/Zoom'}/>
                <StepsItem src={StepImg3} header={'онлайн обучение'} description={'вводный курс для новых сотрудников'}/>
                <StepsItem src={StepImg4} header={'практика'} description={'Закрепление полученных навыков'}/>
            </Row>
        </Container>
    );
};

export default Steps