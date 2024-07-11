import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSequre from "../../Hooks/useAxiosSequre";


const AppliedTrainerDetails = () => {
    const alltrainer = useLoaderData();
    const navigation = useNavigate()
    // const {user} = useContext(AuthContext);
    const axiosSecure =useAxiosSequre()
    const {_id, name,trainerName, profileImage, yearsOfExperience, availableSlots ,about } = alltrainer;
    console.log(alltrainer);


    const handleMakeAdmin = () => {
        axiosSecure.patch(`/users/trainer/${_id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                // refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${trainerName} is an admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
                navigation('/dashboard/appliedtrainer')
        })
    }


    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={profileImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold my-6">{trainerName}</h1>
      <h3 className="text-3xl font-semibold">Years Of Experience : {yearsOfExperience}</h3>
      <p className="py-6">{about}</p>
    <div className="flex gap-3">
    {/* <button className="btn btn-primary">Confirm</button> */}
    <button onClick={() => handleMakeAdmin()} className="btn bg-orange-500 btn-lg">Confirm</button>
    <button className="btn bg-orange-500 btn-lg">Rejected</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppliedTrainerDetails;