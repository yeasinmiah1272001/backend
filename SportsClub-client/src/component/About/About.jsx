import { FaAngleRight } from "react-icons/fa";
import about from "../../assets/about/about_left.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7 my-7 p-5">
      <div className="w-full md:w-1/2">
        <img
          src={about}
          alt="About Us"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-3 w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl">About Us_____</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Take Your Game <br /> To The Next Level.
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim <br /> ad minim veniam quis
          nostrud orem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam.quis nostrud exercitation <br /> ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit. <br /> quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor <br /> in reprehenderit in voluptate velit.
        </p>

        <div className="grid grid-cols-2 gap-5 my-3">
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>Quality Equipment</h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>Best Courses For Beginners</h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>100% Satisfaction Guarantee</h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>Commitment to Member</h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>Affordable Pricing</h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaAngleRight className="bg-red-500 rounded-full" />
            <h1>Professional Coach</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
