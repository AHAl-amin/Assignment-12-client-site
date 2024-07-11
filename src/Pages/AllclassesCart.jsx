// import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../Hooks/useAxiosSequre";
import { Link } from "react-router-dom";

const AllclassesCart = ({ item ,trainer}) => {
  const { _id, classesName, image, dettails } = item;
  // console.log(item)
  const axiosSecure =useAxiosSequre()
  const {data: alltrainer = [], } =useQuery({
      queryKey: ['alltrainer'],
      queryFn:async () =>{
          const res = await axiosSecure.get('/alltrainer')
          console.log(res)
          return res.data;

      }
  })
  console.log(alltrainer.length)
  return (
    <div>
      <div className="hero p-6 bg-base-200 h-full">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="rounded-lg shadow-2xl w-[120px] h-[200px]"
          />
          <div>
            <h1 className="text-5xl font-bold">{classesName}</h1>
            <p className="py-6">
             {dettails}
            </p>
            <h3 className="text-2xl text-center my-6">Trainer who took this class</h3>
            <div className="grid grid-cols-5">
              
            {
              alltrainer.slice(0,5).map(a => 
                <div key={a._id}> 
                  <Link to={`/knowmore/${a._id}`}><img src={a.profileImage} alt="" className="w-[50px] h-[50px] rounded-full" /></Link>
                 </div>
               )
            }
          </div>
          </div>
        </div>
      </div>

       
    </div>
  );
};

export default AllclassesCart;
