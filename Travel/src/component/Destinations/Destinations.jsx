import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Destinations.css";

const Destinations = () => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch("destination.json")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  return (
    <div className="mx-10">
      <SectionTitle
        title={"Travel Destinations"}
        subtitle={
          "Check out the list of countries and places you can travel to by joining us."
        }
      />

      <div className="">
        <div className="grid lg:grid-cols-4">
          {destination.map((dest) => (
            <figure key={dest.id} className="snip1567">
              <img src={dest.img} alt={dest.title} />
              <figcaption>
                <h3>{dest.title}</h3>
                <span className=" p-3 font-semibold">
                  Temperature: {dest.temperature}
                </span>
                <p>{dest.short_description}</p>
              </figcaption>
              <div className="hover"></div>
              <i className="ion-android-add"></i>
              <a href="#"></a>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
