import React, { useEffect, useState } from "react";
import bg from "../../assets/acievement/counter_bg.png";

const Achievement = () => {
  const [achieve, setAchieve] = useState([]);

  useEffect(() => {
    fetch("Acheive.json")
      .then((res) => res.json())
      .then((data) => setAchieve(data));
  }, []);

  return (
    <div
      className="hero h-auto lg:h-[500px] bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* 
      Uncomment this section if you want to include the title and subtitle

      <div className="text-white text-center mb-6 lg:mb-12">
        <h2 className="text-xl md:text-2xl">Our Services _____</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          We Provide You Best Services
        </h1>
      </div>
      */}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white mb-24 lg:mb-0">
        {achieve.map((achieveItem) => (
          <div
            key={achieveItem.id}
            className="block rounded-lg bg-slate-800 bg-opacity-35 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-48 h-36  rounded-t-lg"
                src={achieveItem.image}
                alt={achieveItem.name}
              />
            </div>
            <div className="p-4 text-center">
              <h1 className="text-lg font-semibold">{achieveItem.review}</h1>
              <p className="mt-2">{achieveItem.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
