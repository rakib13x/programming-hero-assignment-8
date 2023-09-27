// Hero.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Hero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchQuery, categoryQuery);

    // Navigate back to the Home route
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <div className="md:max-w-[1400px] max-w-[600px] text-center px-10">
        <h2 className="font-bold text-3xl pt-32">
          I Grow By Helping People in Need
        </h2>
        <div className="flex pl-20 pt-8">
          <input
            type="text"
            className="border border-gray-300 h-9 w-[260px] rounded-l p-2"
            placeholder="Search by category..."
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
          />
          <button
            className="h-9 w-[80px] rounded-r bg-red-500 text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
