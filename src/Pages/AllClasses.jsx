import { Helmet } from "react-helmet-async";
import SectionsTitle from "../Componants/SectionsTitle";
import AllclassesCart from "./AllclassesCart";
import { useEffect, useState } from "react";

import axios from "axios";


const AllClasses = () => {
  const [addnewclasses, setAddnewClasses] = useState([]);
  // console.log(alltrainers)
  const [serach, setSearch] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/addclasses?search=${serach}`)
    .then((res) => {
      // console.log(res.data)
      setAddnewClasses(res?.data);
    });
  }, [serach])

 const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText)
    }
  // axios.get("http://localhost:5000/allTrainer").then((res) => {
  //   // console.log(res.data)
  //   setClasses(res?.data);
 
  // });
  return (
    <div>
      <Helmet>
        <title>FitnessPal/All calasses</title>
      </Helmet>
      <SectionsTitle heading={"All classes"}></SectionsTitle>
      <div>
        <div>
        <div className='flex gap-6 my-4 items-center'>
                <form className='bg-orange-300 w-[300px] text-center p-2 rounded-xl' onSubmit={handleSearch} >
                    <div className=''>
                        <input type="text" name="search" className='h-12 mr-2 rounded-lg text-left p-2' placeholder="search here" />
                        <input type="submit" value="search" className="btn" />
                    </div>
                </form>


              
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {addnewclasses?.map((allclass) => (
              <AllclassesCart
                key={allclass._id}
                item={allclass}
              ></AllclassesCart>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
