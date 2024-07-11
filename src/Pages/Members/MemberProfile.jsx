import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  console.log('meta data',user?.metadata?.lastSignInTime);
//   console.log(user?.displayName);
//   console.log(user?.email);

  return (
    <div>
    <h2 className="text-3xl font-bold text-center my-14">Member Information</h2>
      <div className="card bg-base-100 w-96 shadow-xl mx-auto  ">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="font-bold">Name:</span>{user?.displayName}</h2>
          <p> <span className="font-bold">Email:</span>{user?.email}</p>
          <p className="font-bold">Last login status: {user?.metadata?.lastSignInTime} </p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
