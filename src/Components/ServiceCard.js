import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://images.unsplash.com/photo-1521651000640-f7b2cb02ffb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                    <Link className='btn btn-primary' to='/service/:id'>View details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;