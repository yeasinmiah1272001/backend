import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaList, FaMagic } from "react-icons/fa";

const DashBoard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-pink-400 h-screen p-5 w-40">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaHome />
            <Link to="/dash/userhome" className="hover:text-gray-700">
              User Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaBook />
            <Link to="/dash/addbook" className="hover:text-gray-700">
              Add Book
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaList />
            <Link to="/dash/mybook" className="hover:text-gray-700">
              My Books
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaMagic></FaMagic>
            <Link to="/dash/user" className="hover:text-gray-700">
              All Users
            </Link>
          </li>
          <li className="flex items-center space-x-2"></li>
        </ul>
        <div className="divider divider-secondary"></div>
        <ul>
          <li className="flex items-center space-x-2">
            <FaHome />
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Outlet */}
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
