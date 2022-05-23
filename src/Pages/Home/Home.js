import React from 'react';
import Banner from './Banner';
import ExtraSections from './ExtraSections';
import Footer from './Footer';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ExtraSections></ExtraSections>
            <Footer></Footer>
        </div>
    );
};

export default Home;