import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div>
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>

            </div>
            <div className='flex justify-center'>
                <Link to='/services' className="btn btn-outline btn-primary w-1/5">See All</Link>
            </div>
        </div>
    );
};

export default Services;