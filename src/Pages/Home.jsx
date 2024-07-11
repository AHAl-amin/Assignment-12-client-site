import React from 'react';
import Banner from '../Componants/Banner';
import Feature from '../Componants/Feature';
import About from '../Componants/About';
import FeatureClass from '../Componants/FeatureClass';
import Testimonials from '../Componants/Testimonials ';
import LatestCommunity from '../Componants/LatestCommunity';
import Newsletter from '../Componants/Newsletter';
import Team from '../Componants/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <FeatureClass></FeatureClass>
            <Testimonials></Testimonials>
            <LatestCommunity></LatestCommunity>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;