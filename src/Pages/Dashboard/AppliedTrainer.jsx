import { useQuery } from "@tanstack/react-query";

import useAxiosSequre from "../../Hooks/useAxiosSequre";
import { FaDebian } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
const AppliedTrainer = () => {
    const axiosSecure =useAxiosSequre()
    const {data: alltrainer = [], refetch } =useQuery({
        queryKey: ['alltrainer'],
        queryFn:async () =>{
            const res = await axiosSecure.get('/alltrainer')
            console.log(res)
            return res.data;

        }
    })
    console.log(alltrainer)
    const allApplied = alltrainer.filter(item => item.role !== 'trainer');
    

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-4">All Trainer Applied : {allApplied?.length}</h1>
            <div>
                  <table className="table   border-gray-600 rounded-xl w-4/5 p-10 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            Serial Number
                            </th>
                            <th>Name</th>
                            <th> Email</th>
                            <th>Delete</th>
                            
                          
                        </tr>
                    </thead>
                    <tbody>
                      
                     {
                        allApplied.map((trainer,index) => <tr key={trainer._id}>
                            <td>{index + 1} </td>
                            <td>{trainer?.userName}</td>
                            <td>{trainer?.email}</td>
                            <td>
                                <Link to={`/dashboard/trainerDetails/${trainer._id}`} className="btn btn-ghost btn-lg"><BiDetail className="text-red-600" /></Link>
                           
                            </td>
                           </tr>
                           )
                     }
                    </tbody>
                    {/* foot */}
               

                </table>
                  </div>
        </div>
    );
};

export default AppliedTrainer;