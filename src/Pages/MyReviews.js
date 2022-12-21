import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewTableRow from '../Components/ReviewTableRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const { data: userReviews = [], refetch } = useQuery({
        queryKey: ['userReviews'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews?email=${user.email}`);
            const data = await res.json();
            return data
        }
    });
    return (
        <div className="p-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">

            {
                userReviews.map(userReview => <ReviewTableRow refetch={refetch} userReview={userReview} key={userReview._id}></ReviewTableRow>)
            }

        </div>
    );
};

export default MyReviews;