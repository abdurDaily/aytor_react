import React from 'react';
import Navbar from '../navbar/Navbar';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="This is my page description" />
            </Helmet>
            <Navbar />
            <Banner />
            <Slider />
        </div>
    );
};

export default Home;