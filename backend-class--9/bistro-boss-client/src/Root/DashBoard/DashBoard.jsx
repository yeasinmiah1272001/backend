import { BiBookAdd } from "react-icons/bi";
import { FaAd, FaCalendar, FaList, FaShoppingCart, FaStreetView, FaUser, FaUtensils } from "react-icons/fa";
import { MdHome, MdPayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FaHelmetUn, FaMessage } from "react-icons/fa6";


const DashBoard = () => {
       const [cart,refresh] = useCart()
       const isAdmin = true;

       return (
         <div className="flex gap-8">
           <div className="w-64 min-h-full bg-orange-400 p-7">
             <h1 className="text-4xl font-semibold mb-4">
               BIstro Boss <br />{" "}
               <h2 className="font-semibold text-2xl">Resturent</h2>
             </h1>
             <ul className="space-y-4">
               {isAdmin ? (
                 <>
                   <li className="flex items-center gap-2 font-bold">
                     <MdHome></MdHome>
                     <NavLink to="/dash/addminHome">AdminHome</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaUtensils></FaUtensils>
                     <NavLink to="/dash/addItems">AddItems</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                    <FaList></FaList>
                     <NavLink to="/dash/manageItem">ManageItem</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaAd></FaAd>
                     <NavLink to="/dash/manageBokking">Manage Booking</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaUser></FaUser>
                     <NavLink to="/dash/allusers">AllUsers</NavLink>
                   </li>
                   
                 </>
               ) : (
                 <>
                   <li className="flex items-center gap-2 font-bold">
                     <MdHome></MdHome>
                     <NavLink to="/dash/cart">Home</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaCalendar></FaCalendar>
                     <NavLink to="/">Resurvation</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <MdPayment></MdPayment>
                     <NavLink to="/dash/payment">Payment</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaShoppingCart></FaShoppingCart>
                     <NavLink to="/dash/cart">My Cart {cart.length}</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <FaStreetView></FaStreetView>
                     <NavLink to="/dash/cart">Review</NavLink>
                   </li>
                   <li className="flex items-center gap-2 font-bold">
                     <BiBookAdd></BiBookAdd>
                     <NavLink to="/dash/cart">Booking</NavLink>
                   </li>
                 </>
               )}
             </ul>
             {/* divider */}
             <div className="divider divider-warning"></div>

             <ul className="space-y-4">
               <li className="flex items-center gap-2 font-bold">
                 <MdHome></MdHome>
                 <NavLink to="/">Home</NavLink>
               </li>
               <li className="flex items-center gap-2 font-bold">
                 <FaHelmetUn></FaHelmetUn>
                 <NavLink to="/menu">Menu</NavLink>
               </li>
               <li className="flex items-center gap-2 font-bold">
                 <FaShoppingCart></FaShoppingCart>
                 <NavLink to="/dash/shop">Shop</NavLink>
               </li>
               <li className="flex items-center gap-2 font-bold">
                 <FaMessage></FaMessage>
                 <NavLink to="/dash/contact">Contact</NavLink>
               </li>
             </ul>
           </div>
           <div className="flex-1 h-screen">
             <Outlet></Outlet>
           </div>
         </div>
       );
};

export default DashBoard;