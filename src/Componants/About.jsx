
import SectionsTitle from './SectionsTitle';

const About = () => {
    return (
        <div>
            <div>
                <SectionsTitle
                    heading={'About us'}
                >

                </SectionsTitle>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-2xl'>
                <p className='font-bold text-center mx-auto lg:w-2/3 mt-8'>The About section should capture the essence of your fitness center, providing visitors with a clear understanding of your mission, vision, services, and what makes your fitness center unique. It should also introduce the team and highlight any special certifications or achievements</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 my-8 gap-4'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center text-orange-400">Our Services</h2>

                            <div className='list-disc  ' >
                                <li className='m' ><span className='font-bold'>Personal Training : </span> Customized workout plans tailored to individual goals and fitness levels.


                                </li>
                                <li> <span className='font-bold'>Group Classes :  </span> High-energy group workouts including yoga, pilates, HIIT, and more.</li>

                                <li><span className='font-bold'>Nutrition Counseling :  </span>   Personalized nutrition plans to complement your fitness regime.</li>

                                <li> <span className='font-bold'>Training :  </span> Online Virtual training sessions for those who prefer to workout from home.</li>
                            </div>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center text-orange-400">Why Choose Us?</h2>

                            <div className='list-disc  ' >
                                <li className='m' ><span className='font-bold'>Certified Professionals: </span> All our trainers are certified and have extensive experience in the fitness industry.


                                </li>
                                <li> <span className='font-bold'>Personalized Approach: </span>  We tailor our services to meet your unique needs and goals.</li>

                                <li><span className='font-bold'>Community Focus:  </span>   We foster a supportive and motivating community environment.</li>

                                <li> <span className='font-bold'>State-of-the-Art Facilities:  </span> Our gym is equipped with the latest fitness equipment and amenities.</li>
                            </div>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center text-orange-400">Our Achievements</h2>

                            <div className='list-disc space-y-5 mt-5 ' >
                                <li className='font-bold' >

                                    Best Fitness Center Award 2023

                                </li>
                                <li className='font-bold' >

                                Top Personal Trainers in the City
                                </li>
                                <li className='font-bold' >

                                
                                Certified Nutrition and Wellness Experts
                                </li>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;