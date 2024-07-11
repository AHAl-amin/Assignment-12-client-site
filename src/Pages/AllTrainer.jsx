// import React, { useState } from 'react';
import { useState } from 'react';
import SectionsTitle from '../Componants/SectionsTitle';
import AllTrainerCart from './AllTrainerCart';
import axios from 'axios';


const AllTrainer = () => {

    const [alltrainers, setAlltrainer] = useState([]);
   
    // console.log(alltrainers)


    // useEffect(() => {
    //     fetch('http://localhost:5000/allTrainer')
    //         .then(res => res.json())
    //         .then(data => {

    //             console.log(data)
    //             setAlltrainer(data)

    //         })
    // }, [])
    axios.get('http://localhost:5000/allTrainer')
        .then(res => {

            // console.log(res.data)
           
            setAlltrainer(res?.data)

        })

    return (
        <div>
            <div>
                <SectionsTitle heading={'All trainer'}>

                </SectionsTitle>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>

                {
                    alltrainers?.map(allTrainer => <AllTrainerCart key={allTrainer._id} item={allTrainer}
                    ></AllTrainerCart>)
                }
            </div>
        </div>
    );
};

export default AllTrainer;