import SectionsTitle from "./SectionsTitle";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'


const Testimonials  = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            
        }, [])
        console.log(reviews.data)

    return (
        <div>
            <div>
            <SectionsTitle
                
                heading={'Testimonials'}
            >
            </SectionsTitle>
            </div>
              <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {

                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-12 flex flex-col items-center space-y-4">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.Rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h2 className="text-2xl font-bold text-orange-300">{review.name}</h2>
                        </div>



                    </SwiperSlide>)

                }

            </Swiper>
        </div>
    );
};

export default Testimonials ;