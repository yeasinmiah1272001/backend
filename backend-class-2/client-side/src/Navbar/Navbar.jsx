import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex flex-col sm:flex-row md:flex-row justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0 md:mb-0">
          <Link to="/" className="text-white font-bold text-lg">
            CareerHub
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row">
          <Link
            to="/"
            className="text-white hover:underline mb-2 sm:mb-0 sm:mx-4 md:mx-4"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-white hover:underline mb-2 sm:mb-0 sm:mx-4 md:mx-4"
          >
            Service
          </Link>
          <Link
            to="/form"
            className="text-white hover:underline mb-2 sm:mb-0 sm:mx-4 md:mx-4"
          >
            Form
          </Link>
          <Link
            to="/blog"
            className="text-white hover:underline mb-2 sm:mb-0 sm:mx-4 md:mx-4"
          >
            Blog
          </Link>
        </div>
        <div className="text-center sm:text-right mt-4 sm:mt-0 md:mt-0">
          <Link
            to="/applied"
            className="bg-white text-blue-500 hover:bg-blue-200 px-4 py-2 rounded-full"
          >
            Start Applying
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
