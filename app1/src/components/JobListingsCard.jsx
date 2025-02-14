import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobListingsCard = ({
  type,
  title,
  description,
  salary,
  location,
  id,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  let jobDescription = description;
  if (!showDescription) {
    jobDescription = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{type}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="mb-5">{jobDescription}</div>

        <button
          onClick={() => setShowDescription((prevState) => !prevState)}
          className="text-stone-400 hover:text-gray-600 mb-2"
        >
          {!showDescription ? "More" : "Less"}
        </button>

        <h3 className="text-stone-400 mb-2">{salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaLocationDot className="text-lg inline mb-2 mr-1" />
            {location}
          </div>
          <Link
            to={`/jobs/${id}`}
            className="h-[36px] bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListingsCard;
