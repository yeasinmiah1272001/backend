import React from "react";

const TimeSchedule = () => {
  return (
    <div>
      <div className="text-center my-3 ">
        <h2 className="text-red-500">Club Timing </h2>
        <h1 className="text-4xl">Our Club Time Schedule</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {/* Monday Schedule Card */}
        <div className="bg-white p-4 rounded-lg shadow-md duration-1000 hover:bg-red-600 hover:-mt-5">
          <h2 className="text-xl font-semibold mb-2">Monday</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">8:00 AM - 10:00 AM:</span> Morning
              Meeting
            </li>
            <li className="mb-2">
              <span className="font-semibold">10:30 AM - 12:00 PM:</span>{" "}
              Project Review
            </li>
            <li className="mb-2">
              <span className="font-semibold">2:00 PM - 4:00 PM:</span> Design
              Sprint
            </li>
          </ul>
        </div>

        {/* Tuesday Schedule Card */}
        <div className="bg-white p-4 hover:bg-red-600 hover:-mt-5 duration-1000 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tuesday</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">9:00 AM - 11:00 AM:</span>{" "}
              Planning Session
            </li>
            <li className="mb-2">
              <span className="font-semibold">1:00 PM - 3:00 PM:</span>{" "}
              Marketing Strategy
            </li>
            <li className="mb-2">
              <span className="font-semibold">4:00 PM - 5:30 PM:</span> Team
              Training
            </li>
          </ul>
        </div>

        {/* Wednesday Schedule Card */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:bg-red-600 hover:-mt-5 duration-1000">
          <h2 className="text-xl font-semibold mb-2">Wednesday</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">10:00 AM - 12:00 PM:</span> Client
              Presentation
            </li>
            <li className="mb-2">
              <span className="font-semibold">2:00 PM - 4:00 PM:</span> Project
              Development
            </li>
            <li className="mb-2">
              <span className="font-semibold">5:00 PM - 6:30 PM:</span> Review
              Meeting
            </li>
          </ul>
        </div>

        {/* Thursday Schedule Card */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:bg-red-600 hover:-mt-5 duration-1000">
          <h2 className="text-xl font-semibold mb-2">Thursday</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">9:30 AM - 11:00 AM:</span> Team
              Standup
            </li>
            <li className="mb-2">
              <span className="font-semibold">1:30 PM - 3:00 PM:</span> Product
              Launch Prep
            </li>
            <li className="mb-2">
              <span className="font-semibold">4:30 PM - 6:00 PM:</span>{" "}
              Marketing Campaign
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeSchedule;
