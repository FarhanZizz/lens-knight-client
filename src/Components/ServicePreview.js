import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
const ServicePreview = () => {
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/`);
            const data = await res.json();
            return data
        }
    });

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