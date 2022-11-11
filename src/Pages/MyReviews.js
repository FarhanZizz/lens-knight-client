import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewTableRow from '../Components/ReviewTableRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {


        fetch(`http://localhost:5000/myreviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Review</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        userReviews.map(userReview => <ReviewTableRow userReview={userReview} key={userReview._id}></ReviewTableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;