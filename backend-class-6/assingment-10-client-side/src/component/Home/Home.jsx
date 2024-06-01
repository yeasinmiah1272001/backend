
import Banner from "../Banner/Banner";
import BrandName from "../BrandName/BrandName";
import Testimonial from "../Testimonial/Testimonial";
import HeroContent from "../HeroContent/HeroContent";
import { useEffect, useState } from "react";



const Home = () => {
  const [brand,setBrand] = useState([])
  useEffect(() => {
    fetch("https://assingment-10-server-khaki.vercel.app/brand")
      .then((res) => res.json())
      .then((data) => setBrand(data));
  },[])


 
   
       return (
         <div>
           <Banner></Banner>
           <BrandName brand={brand}></BrandName>
           <HeroContent></HeroContent>
           <Testimonial></Testimonial>
         </div>
       );
};

export default Home;