import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 h-[500px]">
        <p className="text-3xl">Opps! page not found.</p>
        <p className="text-4xl">404 page</p>
        <Link to="/">
        <button className="btn">Back to home</button>
        </Link>
    </div>
    );
};

export default Error;