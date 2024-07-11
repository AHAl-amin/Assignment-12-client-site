
import { useContext} from "react";
import { BsActivity } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaPeopleArrows } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

import { SlEnvolopeLetter } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";

import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTrainer from "../../Hooks/useTrainer";

const Dashboard = () => {
  const {user}=useContext(AuthContext);
  // const [isAdmin ,setIsAdmin] =useState(false);
  // console.log(user?.email)

  // if(user?.email ==="alamin@gmail.com"){
  //   setIsAdmin(true)
  // }
  const admin = user?.email === "alamin@gmail.com" 
 const [isTrainer] = useTrainer();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <h2 className="font-bold text-2xl mt-4 ml-4 text-white">FitnessPal</h2>
        <ul className="menu p-4">
        {
           admin &&
          <>
           <ul>

           <li>
            <Link >
            <FaHome></FaHome>
          Admin Home
            </Link>
          </li>
            <li>
            <NavLink to="/dashboard/newsletter">
            <SlEnvolopeLetter />
           Newsletter subscribers
            </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/alltrainer'>
              <IoPeopleSharp />
              All Trainers
              </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/appliedtrainer'>
              <FaPeopleArrows />
              Applied Trainer
              </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/bookedTrainer'>
              <MdOutlineAttachMoney />
              Balance
              </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/addnewclass'>
              <IoMdAdd />
              Add new Class
              </NavLink>
          </li>
           </ul>
          
          </>
 }
 {
  isTrainer && 
  <ul>
  <li>
    <NavLink to="/dashboard/manageslot">
   <BsActivity></BsActivity>
    Manage Slots
    </NavLink>
  </li>
  <li>
      <NavLink to='/dashboard/addnewSlod'>
      <CgProfile />
      Add New slot
      </NavLink>
  </li>
  <li>
      <NavLink to='/dashboard/addnewfuram'>
      <TbBrandBooking />
      Add new Forum
      </NavLink>
  </li>
  </ul>
 }

   { !admin && !isTrainer &&
          <>
          <ul>
          <li>
            <NavLink to="/dashboard/activity">
           <BsActivity></BsActivity>
            Activity Log
            </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/profile'>
              <CgProfile />
              Profile 
              </NavLink>
          </li>
          <li>
              <NavLink to='/dashboard/bokedtrainer'>
              <TbBrandBooking />
             Booked Trainer
              </NavLink>
          </li>
          </ul>
          </>
        }
          <div className="divider"></div>
          <li>
            <NavLink to='/'>
            <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
