import Marquee from "react-fast-marquee";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPlane,
} from "react-icons/fa";

const FeatureCard = ({ item }) => {
  const { description, price_per_day, rating, title, image_url } = item;

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mt-8">
      {/* Image */}
      <div className="relative">
        <img src={image_url} alt={title} className="w-full h-44 object-cover" />
        {/* Price Button */}
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-75 lg:-mt-14 lg:-ml-36">
          ${price_per_day}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">{"★".repeat(rating)}</span>
          <span className="text-gray-600 ml-2">{rating} / 5</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Marquee */}
        <Marquee speed={20} gradient={false} className="mb-4">
          <span className="text-gray-600">
            Special Offer: 20% off on all bookings!
          </span>
        </Marquee>


        {/* Additional Icons */}
        <div className="flex space-x-4 mt-4 text-gray-500">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Location</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPlane />
            <span>Flight</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
