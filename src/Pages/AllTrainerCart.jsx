import { Link } from "react-router-dom";

const AllTrainerCart = ({ item }) => {
  const { _id, name, profileImage, yearsOfExperience, availableSlots, about } =
    item;
  // console.log(item)
  

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
      
        
           <img
              src={profileImage}
              alt="Shoes"
              className="rounded-xl w-full h-[250px]"
            />
        
       
        </figure>
        <div className="card-body  ">
          <h2 className="card-title font-extrabold">{name}</h2>
          <p className="font-bold">Year of exprience : {yearsOfExperience}</p>
          <p className="font-bold"> Available Slods : {availableSlots}</p>
          <div className="card-actions justify-center mt-4">
            <Link to={`/knowmore/${_id}`}>
              <button className="btn btn-primary">Know More </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTrainerCart;
