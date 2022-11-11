import React from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import Newsletter from '../Components/Newsletter';
import ServicePreview from '../Components/ServicePreview';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ServicePreview></ServicePreview>
            <Gallery></Gallery>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;