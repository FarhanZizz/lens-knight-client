import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';


const ReviewTableRow = ({ userReview, refetch }) => {
    const { serviceid, review, _id } = userReview;

    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://lens-knight-server.vercel.app/services/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceid])

    const handleDelete = (id) => {
        fetch(`https://lens-knight-server.vercel.app/review/delete/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success('Deleted Successfully')
                }
            })
    }
    return (
        <div className="">
            <div className="card h-96 image-full">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold mb-6">{service.title}</h2>
                    <p>{review}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-error text-white font-bold">DELETE REVIEW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewTableRow;