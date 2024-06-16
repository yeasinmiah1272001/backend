import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import carosouel from "../../assets/slider/slide.png";

const Carosouel = () => {
  return (
    <AwesomeSlider className="h-[240px] sm:h-[360px] md:h-[480px] lg:h-[490px] xl:h-[490px]">
      <div className="w-full h-full flex items-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={carosouel}
          alt="Slide"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={carosouel}
          alt="Slide"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={carosouel}
          alt="Slide"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={carosouel}
          alt="Slide"
        />
      </div>
    </AwesomeSlider>
  );
};

export default Carosouel;
