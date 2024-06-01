import React from "react";

const Review = () => {
  return (
    <div className="w-full mt-5 h-auto sm:h-36 text-center bg-black rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row font-semibold justify-around text-white items-center sm:mt-5">
        <div>
          <p>We are Open monday to friday</p>
          <h1 className="text-3xl mt-1">7:00 AM - 9:00 PM</h1>
        </div>
        <div className="sm:mt-0 mt-5">
          <p>Have a question</p>
          <h1 className="text-3xl mt-1">01910-255376</h1>
        </div>
        <div className="sm:mt-0 mt-5">
          <p>Our Location</p>
          <h1 className="text-3xl mt-1">Lalbag kellah</h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
