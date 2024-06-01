import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

// install slider (npm install --save react-awesome-slider)

const Banner = () => {
  return (
    <AwesomeSlider className="carousel w-full h-[500px] mt-2">
      {/* slide-1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className=" lg:h-[500px] w-[1300px] md:h-auto rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:w-1/2">
          <div className="text-white space-y-7 pl-12 w-full">
            <h2 className="text-2xl md:text-4xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* slide2 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img2}
          className=" lg:h-[500px] w-[1300px] md:h-auto rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:w-1/2">
          <div className="text-white space-y-7 pl-12 w-full">
            <h2 className="text-2xl md:text-4xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* slide3 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img3}
          className=" lg:h-[500px] w-[1300px] md:h-auto rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:w-1/2">
          <div className="text-white space-y-7 pl-12 w-full">
            <h2 className="text-2xl md:text-4xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* slide4 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img4}
          className=" lg:h-[500px] w-[1300px] md:h-auto rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:w-1/2">
          <div className="text-white space-y-7 pl-12 w-full">
            <h2 className="text-2xl md:text-4xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
