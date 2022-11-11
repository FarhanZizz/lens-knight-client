import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0, 90)}...</p>
                <div className="card-actions justify-between">
                    <p className='font-semibold mt-2'>Price: {price}$</p>
                    <Link className='btn btn-primary' to='/service/:id'>View details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;