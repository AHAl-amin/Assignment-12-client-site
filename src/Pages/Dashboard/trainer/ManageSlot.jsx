import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const ManageSlot = () => {
  const axiosSecure = useAxiosSequre();
  const { data: alltrainer = [], refetch } = useQuery({
    queryKey: ["alltrainer"],
    queryFn: async () => {
      const res = await axiosSecure.get("/alltrainer");
      console.log(res);
      return res.data;
    },
  });
  console.log(alltrainer);
  const allApplied = alltrainer.filter((item) => item.role == "trainer");

  const handleDeleteUSer = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //  axios.delete(`https://bistro-boss-server-teal-three.vercel.app/cartall/${id}`)
        //  .then(res => {
        //     console.log(res);
        //  })
        axiosSecure.delete(`/allTrainer/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-4">Manage Slots</h1>
      <div>
        <table className="table   border-gray-600 rounded-xl w-4/5 p-10 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th> Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allApplied.map((trainer, index) => (
              <tr key={trainer._id}>
                <td>{index + 1} </td>
                <td>{trainer?.userName}</td>
                <td>{trainer?.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUSer(trainer)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageSlot;
