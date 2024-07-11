

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import AllClasses from "../Pages/AllClasses";
import AllTrainer from "../Pages/AllTrainer";
import Community from "../Pages/Community";
import DhashBoard from "../Pages/Dashboard/DhashBoardPage";
import PrivetRout from "../Routs/PrivetRout"
import KnowMore from "../Pages/KnowMore";
import TrainarBook from "../Pages/TrainarBook";
import BecomeTrainer from "../Pages/BecomeTrainer";
import Payment from "../Pages/Payment";
import Dashboard from "../LayOuts/Dashboard/Dashboard";
import DhashBoardPage from "../Pages/Dashboard/DhashBoardPage";

import AlltrainerD from "../Pages/Dashboard/AlltrainersD/AlltrainerD";
import NewsletterD from "../Pages/Dashboard/NewsletterD";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer";
import AppliedTrainerDetails from "../Pages/Dashboard/AppliedTrainerDetails";
import AddNewClass from "../Pages/Dashboard/AddNewClass";
import MemberProfile from "../Pages/Members/MemberProfile";
import ManageSlot from "../Pages/Dashboard/trainer/ManageSlot";
import AddNewFuram from "../Pages/Dashboard/trainer/AddNewFuram";
import ActiveityLog from "../Pages/Members/ActiveityLog";
import BokedTrainer from "./BokedTrainer";
import AddAnewSlod from "../Pages/Dashboard/trainer/AddAnewSlod";

  export const router = createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
              path:"/login",
              element:<Login></Login>
            },
            {
              path:"/signup",
              element:<SignUp></SignUp>
            },
            {
              path:"/allclasses",
              element:<AllClasses></AllClasses>
            },
            {
              path:"/alltrainer",
              element:<AllTrainer></AllTrainer>
            },
            {
              path:"/community",
              element:<Community></Community>
            },
            {
              path:"/dashboard",
              element:<DhashBoard></DhashBoard>
            },
            {
              path:'/knowmore/:id',
              element:<KnowMore></KnowMore>,
              loader:({params}) =>fetch(`http://localhost:5000/alltrainer/${params.id}`)
            },
          {
            path:'/availableslode/:id',
            element:<PrivetRout>
              <TrainarBook></TrainarBook>
            </PrivetRout>
            ,
            loader:({params}) =>fetch(`http://localhost:5000/alltrainer/${params.id}`)

          },
          {
            path:'/becomeAtrainer',
            element:<PrivetRout>
              <BecomeTrainer></BecomeTrainer>
            </PrivetRout>
          },
          {
            path:'/payment/:id',
            element:<PrivetRout>
              <Payment></Payment>
            </PrivetRout>,
             loader:({params}) =>fetch(`http://localhost:5000/alltrainer/${params.id}`)
            
          }
         
        ]
    }
    ,
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'dashboardPage',
          element:<DhashBoardPage></DhashBoardPage>
         
        },
        // tariner jonno
        {
            path:'manageslot',
            element:<ManageSlot></ManageSlot>
        },
        {
            path:'addnewfuram',
            element:<AddNewFuram></AddNewFuram>
        },
        {
            path:'addnewSlod',
            element:<AddAnewSlod></AddAnewSlod>
        },
        // admin routs
        {
          path:'alltrainer',
          element:<AlltrainerD></AlltrainerD>
        },
        {
          path:'newsletter',
          element:<NewsletterD></NewsletterD>
        },
        {
          path:'addnewclass',
          element:<AddNewClass></AddNewClass>
        },
        {
          path:'appliedtrainer',
          element:<AppliedTrainer></AppliedTrainer>
        },
        {
          path:'trainerDetails/:id',
          element:<AppliedTrainerDetails></AppliedTrainerDetails>,
          loader:({params}) =>fetch(`http://localhost:5000/alltrainer/${params.id}`)
        },
        // Members
        {
          path:'profile',
          element:<MemberProfile></MemberProfile>
        },
        {
          path:'activity',
          element:<ActiveityLog></ActiveityLog>
        },
        {
          path:'bokedtrainer',
          element:<BokedTrainer></BokedTrainer>
        },

      ]
    }
  ])