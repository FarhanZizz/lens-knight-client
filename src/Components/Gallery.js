import React from 'react';
import img from '../Assets/Gallery.PNG'

const Gallery = () => {
    return (
        <div className='mt-8'>
            <h1 className="text-3xl font-bold text-center my-5">Our Gallery</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} />
                    <div className='text-center'>
                        <h1 className="text-3xl font-semibold">LIMITED EDITIONS</h1>
                        <p className="py-6">Limited Editions are 'one offs' and 'limited numbers' of fine art photography & visual arts by a selection of global artists and creatives.</p>
                        <button className="btn">View our Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;