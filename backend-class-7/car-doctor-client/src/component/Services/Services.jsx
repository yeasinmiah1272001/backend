import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-phi-two.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-7">
      <div className="my-4">
        <h1 className="text-2xl text-red-500 text-center font-bold">Service</h1>
        <div>
          <h1 className="text-4xl text-red-600 text-center font-bold">
            Our Service Area
          </h1>
          <p className="text-center my-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
