import React from 'react';
import Banner from './Banner';
import ExtraSections from './ExtraSections';
import Footer from '../Shared/Footer';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ExtraSections></ExtraSections>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;