import React, { useEffect, useState } from 'react';

const ReviewTableRow = ({ userReview }) => {
    const { serviceid, review } = userReview;
    const [service, setService] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/service/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <tr>
            <th>1</th>
            <td>{service.title}</td>
            <td></td>
        </tr>
    );
};

export default ReviewTableRow;