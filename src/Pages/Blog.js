import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card bg-base-300 rounded-box place-items-center my-5">
                <p className='text-2xl'><span className='font-bold'>Q.Difference between SQL and NoSQL?</span> <br />
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className="grid card bg-base-300 rounded-box place-items-center my-5">
                <p className='text-2xl'><span className='font-bold'>What is JWT, and how does it work?</span> <br />
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
            <div className="grid card bg-base-300 rounded-box place-items-center my-5">
                <p className='text-2xl'><span className='font-bold'>What is the difference between javascript and NodeJS?</span> <br />
                    nodejs is a modern javascript-oriented server framework typically used to provide various services and realtime applications, while node is an older framework for transmitting data packets over amateur radio.</p>
            </div>
            <div className="grid card bg-base-300 rounded-box place-items-center my-5">
                <p className='text-2xl'><span className='font-bold'>How does NodeJS handle multiple requests at the same time?</span> <br />
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div >
    );
};

export default Blog;