import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewCard from '../Components/ReviewCard';

const ServiceDetails = () => {
    const { _id, reviewid, title, price, description, img } = useLoaderData();;
    const { user } = useContext(AuthContext);

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`https://lens-knight-server.vercel.app/reviews/${reviewid}`);
            const data = await res.json();
            return data
        }
    });
    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.image.value;
        const review = form.review.value;

        document.getElementById('review-modal').checked = false;


        const newReview = {
            reviewid,
            name,
            img,
            review,
            email: user.email,
            serviceid: _id,
        }
        fetch(`https://lens-knight-server.vercel.app/reviews/${reviewid}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Review Added Successfully')
                    refetch()
                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='lg:w-3/6' src={img} alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <p className="font-semibold mb-5">Price: {price}$</p>
                        <button className="btn btn-primary">Get Started</button>
                        <label htmlFor="review-modal" className="btn btn-secondary mx-2">Add a Review</label>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl text-center font-bold">Our reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:px-8 justify-center my-10'>
                {
                    reviews.map(review => <ReviewCard details={review} key={review._id}></ReviewCard>)
                }
            </div>
            {/* Put this part before </body> tag */}
            <input name='modal' type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="text-2xl text-center font-semibold">Add your own review</h1>
                    <form onSubmit={handleReviewSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input type="text" readOnly name="image" defaultValue={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/552/552721.png"} placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <input type="text" name="review" placeholder="How was your experience with us?" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 modal-action">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ServiceDetails;