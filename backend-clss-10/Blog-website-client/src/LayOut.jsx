import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Component/Navbar';

const LayOut = () => {
       return (
              <div>
                     <Navbar></Navbar>
                     <Outlet></Outlet>
              </div>
       );
};

export default LayOut;