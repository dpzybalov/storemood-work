import React from "react";
import HeaderMain from "../../Header/HeaderMain";
import City from "./City";
import Privilege from "./Privilege";
import Steps from './Steps'
import Slider from "./Carousel";
import ToTeam from "./ToTeam";
import FormFinal from "./FormFinal";
import Footer from "./Footer";

function HomePage() {
    return (
        <div>
            <HeaderMain/>
            <Privilege/>
            <City/>
            <Steps/>
            <Slider/>
            <ToTeam/>
            <FormFinal/>
            <Footer/>

        </div>

    )
}

export default HomePage