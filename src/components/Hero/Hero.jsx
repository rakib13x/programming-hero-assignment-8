// Hero.jsx
import React, { useState } from "react";

const Hero = ({ cards = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const handleTitleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(query)
    );

    setSearchQuery(query);
    setCategoryQuery("");
    setFilteredCards(filtered);
  };

  const handleCategorySearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = cards.filter((card) =>
      card.category.toLowerCase().includes(query)
    );

    setCategoryQuery(query);
    setSearchQuery("");
    setFilteredCards(filtered);
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
            onChange={handleCategorySearchInputChange}
          />
          <button className="h-9 w-[80px] rounded-r bg-red-500 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
