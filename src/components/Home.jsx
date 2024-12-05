import React from 'react';
import Slider from './Slider';
import About from './About';
import AboutFirst from './AboutFirst';
import HomeMiddle from './HomeMiddle';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutFirst></AboutFirst>
            <HomeMiddle></HomeMiddle>
            <About></About>
        </div>
    );
};

export default Home;