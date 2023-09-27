import React, { useEffect, useState } from "react";
import DonatedCardList from "../DonatedCardList/DonatedCardList";
import { useParams } from "react-router-dom";

const Donation = () => {
  const { id } = useParams();
  console.log(id);
  const [donatedCards, setDonatedCards] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    const storedDonatedCards = JSON.parse(localStorage.getItem("donatedCards"));
    if (storedDonatedCards) {
      setDonatedCards(storedDonatedCards);
    }
  }, []);

  const handleSeeAllClick = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <h2 className="flex justify-center items-center pt-10 text-3xl font-bold border-b">
        Donated Cards
      </h2>
      <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full mt-6 pl-6">
        <div className="grid md:grid-cols-2 px-10 gap-10">
          {donatedCards
            .slice(0, showAllCards ? donatedCards.length : 4)
            .map((cardList, index) => (
              <DonatedCardList key={index} cardList={cardList} />
            ))}
        </div>
      </div>

      <div className="flex justify-center pt-6">
        {donatedCards.length > 4 && (
          <button
            onClick={handleSeeAllClick}
            className="flex justify-center items-center text-white w-[141px] h-[40px] bg-blue-500 rounded left-[600px]"
          >
            {showAllCards ? "Show Less" : "See All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
