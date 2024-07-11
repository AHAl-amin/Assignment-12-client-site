import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabver from '../Shared/Nabver';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
           <div>
            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;