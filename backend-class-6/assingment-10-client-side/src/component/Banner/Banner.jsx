import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../assets/samsung.png";
import banner2 from "../../assets/1581535471_3.jpg";
import banner3 from "../../assets/frizz.png";
import banner4 from "../../assets/iphone banner.png";
import banner5 from "../../assets/tv1.jpg";
import banner6 from "../../assets/tv2.jpg";
import banner7 from "../../assets/tv3.webp";




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
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner4} alt="" />
      </div>
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner5} alt="" />
      </div>
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner6} alt="" />
      </div>
      <div>
        <img className="lg:h-[500px] w-[1300px]" src={banner7} alt="" />
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
