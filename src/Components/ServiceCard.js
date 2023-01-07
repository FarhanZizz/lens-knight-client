import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card mx-auto bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>
                <p>{description.slice(0, 90)}...</p>
                <div className="card-actions justify-between">
                    <p className='font-semibold mt-2'>Price: {price}$</p>
                    <Link className='btn btn-primary' to={`/service/${_id}`} >View details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;