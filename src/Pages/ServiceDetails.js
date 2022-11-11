import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewCard from '../Components/ReviewCard';

const ServiceDetails = () => {
    const { _id, reviewid, title, price, description, img } = useLoaderData();;
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${reviewid}`)
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
            <h1 className="text-2xl text-center font-semibold">Add your own review</h1>
            {
                user?.uid ?
                    <form className="card-body w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <input type="text" name="review" placeholder="How was your experience with us?" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                    :

                    <div className='text-center'>
                        <h1 className="text-1xl text-red-400 text-center font-semibold my-5">You need to be logged in to add your review</h1>
                        <Link className='btn btn-primary mb-5' to='/login'>Log In</Link>
                    </div>}
        </div>
    );
};

export default ServiceDetails;