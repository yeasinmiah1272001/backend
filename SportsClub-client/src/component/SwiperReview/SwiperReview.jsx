
// import img1 from "../../assets/review/img1 (1).png";
import React, { useState } from "react";


const SwiperReview = () => {

       const [activeIndex, setActiveIndex] = useState(0);
       const slides = [
         {
           imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
           label: "First slide label",
           description:
             "Some representative placeholder content for the first slide.",
         },
         {
           imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
           label: "Second slide label",
           description:
             "Some representative placeholder content for the second slide.",
         },
         {
           imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
           label: "Third slide label",
           description:
             "Some representative placeholder content for the third slide.",
         },
       ];

       const handlePrev = () => {
         setActiveIndex((prevIndex) =>
           prevIndex === 0 ? slides.length - 1 : prevIndex - 1
         );
       };

       const handleNext = () => {
         setActiveIndex((prevIndex) =>
           prevIndex === slides.length - 1 ? 0 : prevIndex + 1
         );
       };
       
  return (
    <div className="my-7">
      <div className="text-center my-4">
        <h2 className="text-red-600">Our Testimonials______ </h2>
        <h1 className="text-2xl font-semibold">Connect With Our Awesome Other Peoples</h1>
      </div>
      <div id="carouselDarkVariant" className="relative">
        {/* Carousel indicators */}
        <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                activeIndex === index ? "opacity-100" : ""
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel items */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative float-left -mr-[100%] w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
                activeIndex === index ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <img
                src={slide.imgSrc}
                className="block w-full"
                alt={slide.label}
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                <h5 className="text-xl">{slide.label}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls - prev item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={handlePrev}
        >
          <span className="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        {/* Carousel controls - next item */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={handleNext}
        >
          <span className="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default SwiperReview;
