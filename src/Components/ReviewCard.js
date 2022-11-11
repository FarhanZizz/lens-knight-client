import React from 'react';

const ReviewCard = ({ details }) => {
    const { img, name, review } = details;
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-30 mx-auto rounded-full">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">
                    {name}
                </h2>
                <p>{review}</p>
            </div>
        </div>

    );
};

export default ReviewCard;