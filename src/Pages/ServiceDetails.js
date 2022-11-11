import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const ServiceDetails = () => {
    const { _id, title, price, description, img } = useLoaderData();

    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-3/6' src={img} alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <p className="font-semibold mb-5">Price: {price}$</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl text-center font-bold">Our reviews</h1>
            <div className='grid lg:grid-cols-3 justify-center my-10'>
                {
                    reviews.map(review => <ReviewCard details={review} key={review.id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;