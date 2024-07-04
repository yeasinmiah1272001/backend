import React, { useEffect } from "react";
import travel from "../assets/travelbox.png";
import travel2 from "../assets/travel-cover2.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Set your preferred animation duration
      easing: "ease-in-out", // Set your preferred easing function
    });
  }, []);

  return (
    <div className="mt-5">
      <div
        className="flex flex-col-reverse md:flex-row justify-between items-center mx-10"
        data-aos="zoom-out"
      >
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            Explore all corners of the world <br /> with us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eius
            corrupti <br /> mollitia quos, qui atque sint ipsa pariatur! Nisi,
            sapiente!
          </p>
        </div>
        <img className="w-full md:w-1/2" src={travel} alt="" />
      </div>

      <div
        className="my-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img className="w-full h-96" src={travel2} alt="" />
      </div>
    </div>
  );
};

export default Explore;
