import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/09Wgrb6/man-workingout-local-gym-93675-129300.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-y-10 md:py-10  md:w-2/3">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your Personal Fitness Tracker</h1>
                        <p className="mb-5 text-xl">StayFit is your go-to platform for tracking and achieving your fitness goals. With real-time activity monitoring, heart rate tracking, sleep analysis, and personalized workout plans, StayFit provides all the tools you need to stay motivated and healthy</p>

                        <div>
                            <Link to='/allclasses'>  <button className="btn  btn-success font-bold ">Go to classes</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;