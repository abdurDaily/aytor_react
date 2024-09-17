import React from 'react';
import Navbar from '../navbar/Navbar';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
             <Helmet>
                <title>About</title>
                <meta name="description" content="This is my page description" />
            </Helmet>
            <Navbar />
            <h1>about...</h1>
        </div>
    );
};

export default About;