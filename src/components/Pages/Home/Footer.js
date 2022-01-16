import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import VK from '../../../assets/img/VK.svg'
import IG from '../../../assets/img/IG.svg'
import FB from '../../../assets/img/FB.svg'

const h3 = {
    fontSize: 24,
    marginRight: 60
}

function Footer() {
    return (
        <div className={'Footer'}>
            <Container>
                <div style={{display: 'flex', paddingTop: 36}}>
                    <a href={'https://storemood.com'} style={{color: 'white', textDecoration: "none"}}><h3 style={h3}>storemood</h3></a>
                    <a href={'https://lms.storemood.com'} style={{color: 'white', textDecoration: "none"}}><h3 style={h3}>storemood обучение</h3></a>
                </div>

                <a href={'tel:88005553535'} style={{color: 'white', textDecoration: "none"}}><h3 style={h3}>8 800 555 35 35</h3></a>
                <div className={'social'}>
                    <a href={'https://vk.com/storemood'}><img src={VK} alt={'img'}/></a>
                    <a href={'https://www.instagram.com/storemood/'}><img src={IG} alt={'img'}/></a>
                    <a href={'https://ru-ru.facebook.com/storemoodlife'}><img src={FB} alt={'img'}/></a>
                </div>
                </Container>
        </div>
    );
}

export default Footer