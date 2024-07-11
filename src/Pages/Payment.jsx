import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionsTitle from "../Componants/SectionsTitle";
import Swal from "sweetalert2";

const Payment = () => {
  const alltrainer = useLoaderData();

  const { user } = useContext(AuthContext);
  console.log(user);

  const { availableSlots, trainerName, packages, price, userName, email } =
    alltrainer;
  console.log(alltrainer);

  const handleConfirm = () => {
    const newObj = {
      availableSlots,
      trainerName,
      packages,
      price,
      userName,
      email,
    };
    console.log(newObj);
    // console.log(shortdescription.length)
    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "payment Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>FitnessPal/Payment page</title>
      </Helmet>
      <SectionsTitle heading="Payment page"></SectionsTitle>
      <div className="card card-compact bg-gray-500 border-4 border-orange-400 text-white shadow-xl md:w-1/3 w-full mx-auto my-10">
        <div className="card-body">
          <h2 className="card-title font-bold">
            <span className="">Trainer Name:</span>
            {trainerName}
          </h2>
          <p>
            {" "}
            <span className="font-bold">Slot Name: </span>
            {availableSlots}
          </p>
          <p>
            {" "}
            <span className="font-bold">Package Name: </span>
            {packages}
          </p>
          <p>
            {" "}
            <span className="font-bold">Price: </span>${price}
          </p>

          <h2 className=" font-bold text-2xl my-3">User Info:</h2>
          <p>
            <span className="font-bold">Name: </span>
            {userName}
          </p>
          <p>
            <span className="font-bold">Email: </span>
            {email}
          </p>
          <div className="card-actions ">
            <button onClick={handleConfirm} className="btn btn-primary">
              {" "}
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
