import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }

        </div>
    );
};

export default Services;