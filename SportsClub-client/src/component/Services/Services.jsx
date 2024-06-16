import React, { useEffect, useState } from "react";
import bg from "../../assets/service/service_bg.png";
import Service from "./Service";

const Services = () => {
       const [service, setService] = useState([])
       useEffect(() => {
              fetch('service.json')
              .then(res => res.json())
              .then(data => setService(data))
       },[])
  return (
    <div
      className="hero min-h-screen bg-fixed bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="text-white text-center lg:mb-[1000px]">
        <h2 className="text-xl md:text-2xl">Our Services _____</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          We Provide You Best Services
        </h1>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white">
       
        {
              service.map(service => <Service key={service.id} service={service}></Service>)
        }

      </div>
    </div>
  );
};

export default Services;
