import React from 'react';

const Newsletter = () => {
    return (
        <div className=' text-center border mx-auto p-10 rounded-md my-10'>
            <h1 className="text-3xl font-semibold mb-5">Stay updated with our work</h1>
            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered mr-2" required />
            <button className='btn'>Submit</button>
        </div>
    );
};

export default Newsletter;