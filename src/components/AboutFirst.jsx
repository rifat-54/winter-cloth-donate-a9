import React from 'react';
import sideImg from '../assets/istockphoto-1438297783-612x612.jpg'

const AboutFirst = () => {
    return (
        <div className='md:grid my-32 p-10 bg-slate-300 grid-cols-2 gap-5'>
            <div className="text-center my-auto">
                <h2 className='text-3xl font-bold'>Winter Appeal: Understanding The Impact Of Donate Clothes To Homeless</h2>
                <p className='text-gray-500 mb-5 mt-5'>The winter season is challenging for helpless people. Harsh weather conditions, cold temperatures, and limited resources create difficulties for those who need adequate shelter, clothing, or food. For that, donate clothes to homeless in winter is the best deed you can offer a helpless person as a human being.</p>
            </div>
            <div>
                <img src={sideImg} alt="" />
            </div>
        </div>
    );
};

export default AboutFirst;