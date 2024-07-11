import { Helmet } from "react-helmet-async";
import SectionsTitle from "../Componants/SectionsTitle";
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const TrainarBook = () => {

    const alltrainer = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)
    
    const {_id, availableSlots ,trainerName ,classes ,packages  } = alltrainer;
    console.log(alltrainer)
    return (

        
        <div>
            <Helmet>
                <title>FitnessPal/trainar book</title>
            </Helmet>
            <SectionsTitle
             heading="Trainar Book">

            </SectionsTitle>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
  
  <div className="card-body space-y-2 ">
    <h2 className="card-title text-3xl font-bold">
        {trainerName}</h2>
   <div className="space-y-2">
   <p><span className="font-bold">Slot :</span>{availableSlots}</p>
    <p><span className="font-bold">Classes :</span>{classes}</p>
    <p><span className="font-bold">Packages :</span>{packages}</p>
   </div>
    <div className="card-actions">
      <Link to={`/payment/${_id}`}>
      <button className="btn btn-primary">Join Now</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TrainarBook;