
import SectionsTitle from './SectionsTitle';

const Feature = () => {
    return (
        <div>
            <SectionsTitle

                heading={'Featured'}
            >

            </SectionsTitle>


            <div className='grid grid-cols-1 md:grid-cols-3 my-14'>
                <div className="border-b-2 border-orange-200">
                    <figure className="">
                        <img src="https://i.ibb.co/WyZCqXG/iron-will-black-dumbbell-icon-design-fitness-fusion-dumbbell-man-logo-706143-44308.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">bodybuilding!</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className=" md:border-x-2 md:border-b-2 border-orange-200">
                    <figure className="">
                        <img src="https://i.ibb.co/QYq8wyg/flat-design-strong-woman-silhouette-23-2150333707.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">musculation!</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="  md:border-b-2 border-orange-200">
                    <figure className="">
                        <img src="https://i.ibb.co/g4hRwQX/across-finish-line-tales-marathon-runner-925948-260.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">fitness running</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="   ">
                    <figure className="">
                        <img src="https://i.ibb.co/L86hnf7/simple-vector-stick-man-workout-using-dumbbell-isolated-white-9834-3075.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase"> musculation</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className=" md:border-x-2  border-orange-200">
                    <figure className="">
                        <img src="https://i.ibb.co/Ln1SRsN/flat-design-strong-woman-silhouette-23-2150331932.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase"> weight lifting</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="  ">
                    <figure className="">
                        <img src="https://i.ibb.co/NK9qX1C/collection-crossfit-training-silhouettes-23-2148223660.jpg" alt="Shoes" className="rounded-xl mx-auto h-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase">  classic yoga</h2>
                        <p> Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle today!</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;