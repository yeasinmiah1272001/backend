import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../Image/404/coffe.jpg";
import banner2 from "../../Image/404/coffee2.jpg";
import banner3 from "../../Image/404/coffee3.jpg";

const Banner = () => {
  return (
    <AwesomeSlider className="lg:h-[500px] relative">
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner1} alt="" />
        {/* <div className="absolute top-60 left-0 right-0 mx-auto text-center text-white hidden md:block">
          <h1 className="font-bold text-5xl">Medisure</h1>
          <h1 className="font-bold text-3xl">
            We ensure the best health care as well as clinical service
          </h1>
        </div> */}
      </div>
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner2} alt="" />
        {/* <div className="absolute top-40 left-0 right-0 mx-auto text-center text-white hidden md:block">
          <h1 className="font-bold text-5xl">Medisure</h1>
          <h1 className="font-bold text-3xl">
            We ensure the best health care as well as clinical service
          </h1>
        </div> */}
      </div>
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner3} alt="" />
       
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
