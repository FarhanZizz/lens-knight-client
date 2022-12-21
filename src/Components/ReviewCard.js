import React from 'react';

const ReviewCard = ({ details }) => {
    const { img, name, review } = details;
    return (
        <section>
            <div className="flex flex-col md:flex-row md:items-center">
                <div className=" p-5">
                    <div className='flex items-center'>
                        <img alt='' className="w-16 h-16 rounded-full" src={img} />
                        <div className="mx-4">
                            <h1 className='font-bold text-xl'>{name}</h1>
                            <div className="flex items-center my-1"> <span className='font-semibold mr-1'>4/5</span>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className='badge badge-primary mx-1'>Verified User</p>
                            </div>

                        </div>
                    </div>
                    <p className='my-4'>{review}</p>
                </div>
                {/* <div className="">
                    
                </div> */}
            </div>
        </section>

    );
};

export default ReviewCard;