import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Details from "./component/Services/Details/Details";
// import ChackOut from "./component/ChackOut/ChackOut";
import Bookings from "./component/Bookings/Bookings";
import AuthProvider from "./component/Authntication/Provider/AuthProvider";
import Login from "./component/Authntication/Login/Login";
import Registration from "./component/Authntication/Registration/Registration";
import PrivateRoute from "./component/Authntication/PrivateRoute/PrivateRoute";
import Booking from "./component/Bookings/Booking";
import Contact from "./component/Contact/Contact";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-phi-two.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/booking/:id",
        element: <Bookings></Bookings>,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-phi-two.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path:"/about",
        element:<Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="lg:mx-12">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
