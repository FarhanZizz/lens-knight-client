import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
const ServicePreview = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://lens-knight-server.vercel.app/')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services' className="btn btn-outline btn-primary w-1/5">See All</Link>
            </div>
        </div>
    );
};

export default ServicePreview;