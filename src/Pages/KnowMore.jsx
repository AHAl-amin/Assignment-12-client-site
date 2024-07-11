import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useContext } from "react";
import { Helmet } from "react-helmet-async";



const KnowMore = () => {
    const alltrainer = useLoaderData();
    // const {user} = useContext(AuthContext);
    
    const {_id, name, profileImage, yearsOfExperience, availableSlots ,about } = alltrainer;
    console.log(alltrainer)
    
    return (
        <div className="my-14">
              <Helmet>
                <title>FitnessPal/Dettails page</title>
            </Helmet>
            <h2 className="lg:text-4xl text-2xl font-bold text-center mb-8 text-orange-400">Trainer Dettails</h2>
           
       
        <div className="card  bg-base-100 shadow-xl flex  md:flex-row p-4 gap-16">
          <div className="flex flex-col flex-1 space-y-4  ">
            <h1 className="text-3xl font-bold text-center mb-5 pb-2 border-b-4">Trainer info </h1>
          <div className="">
          <img src={profileImage} alt="Shoes" className="rounded-xl w-full lg:h-[300px] " />
     
   </div>
       <div className="space-y-4 ">
          <h2 className="card-title font-extrabold">{name}</h2>
          <p className='font-bold'>Year of exprience : {yearsOfExperience}</p>
         
          <p>{about}</p>
         

        
       </div>
          </div>
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-center mb-5 pb-2 border-b-4">Available Slods</h1>
            <Link to={`/availableslode/${_id}`}>
            
            <p className='font-bold hover:bg-sky-600 w-1/2 text-center rounded-xl py-2 ease-in duration-300  '>  {availableSlots}
            </p>
            </Link>
            </div>
            </div>
            <div className="text-center mt-16">
            <Link to={`/becomeAtrainer`}>
                      <button  className="btn btn-primary font-bold">Become a Trainer </button>
                      </Link>
            </div>
       

    </div>
    );
};

export default KnowMore;