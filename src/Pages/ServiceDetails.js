import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewCard from '../Components/ReviewCard';

const ServiceDetails = () => {
    const { _id, reviewid, title, price, description, img } = useLoaderData();;
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${reviewid}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.image.value;
        const review = form.review.value;

        const newReview = {
            reviewid,
            name,
            img,
            review,
            email: user.email,
            serviceid: _id,
        }

        fetch(`http://localhost:5000/reviews/${reviewid}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        const newReviewList = [...reviews, newReview];
        setReviews(newReviewList)
    }
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
            <div className='grid gap-y-10 lg:grid-cols-3 justify-center my-10'>
                {
                    reviews.map(review => <ReviewCard details={review} key={review._id}></ReviewCard>)
                }
            </div>
            <h1 className="text-2xl text-center font-semibold">Add your own review</h1>
            {
                user?.uid ?
                    <form onSubmit={handleReviewSubmit} className="card-body w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName} placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={user?.photoURL} placeholder="Photo URL" className="input input-bordered" required />
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