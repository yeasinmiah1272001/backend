import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Error from './../component/Error/Error';
import Home from "../Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../component/Provider/PrivateRoute/PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Root/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";


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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
    ],
  },


  {
    path:"/dash",
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>
      },

      // addmin related
      {
        path:"allUsers",
        element:<AllUsers></AllUsers>
      }
    ]

  }
]);

export default router;