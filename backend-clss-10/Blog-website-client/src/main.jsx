import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
 import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from './LayOut';
import Error from './Component/Error';
import Home from './Component/Home';
import Details from './Component/Details';
import NavBlog from './Component/NavBlog';
 const router = createBrowserRouter([
   {
     path: "/",
     element: <LayOut></LayOut>,
     errorElement:<Error></Error>,
     children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() =>fetch("/blog.json")
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:() =>fetch("/blog.json")
      },
      {
        path:"/blog",
        element:<NavBlog></NavBlog>,
        loader:() => fetch("/blog.json")
      },
     ]
   },
 ]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
