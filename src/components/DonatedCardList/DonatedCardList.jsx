import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory
import { useDonationContext } from "../../DonationContext"; // Import the context hook

const DonatedCardList = ({ cardList }) => {
  console.log(cardList);
  const { donatedCards, setDonatedCards, totalDonation, setTotalDonation } =
    useDonationContext();
  // State to track whether to show all cards
  const navigate = useNavigate();
  console.log("Total Donation:", totalDonation);
  console.log("Donated Cards:", donatedCards);

  useEffect(() => {
    const calculateDonationForItem = (item) => {
      const itemPrice = parseFloat(item.price.replace("$", ""));
      const donationAmount = itemPrice * 0.1;
      return donationAmount;
    };

    const calculateTotalDonation = (cards) => {
      const totalDonation = cards.reduce(
        (total, card) => total + calculateDonationForItem(card),
        0
      );
      return totalDonation;
    };

    const storedDonatedCards =
      JSON.parse(localStorage.getItem("donatedCards")) || [];
    setDonatedCards(storedDonatedCards);

    const newTotalDonation = calculateTotalDonation(storedDonatedCards);
    setTotalDonation(newTotalDonation);
  }, [setDonatedCards, setTotalDonation]);

  // Function to navigate to the donation page with the card's ID
  const handleViewDetailsClick = (cardId) => {
    navigate(`/donation-page/${cardId}`);
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-md">
        <figure>
          <img src={cardList.picture} alt="Movie" className="h-full" />
        </figure>
        <div className="card-body">
          <button
            className="card-actions justify-center items-center h-[25px] w-[64px] rounded text-gray-100"
            style={{
              background: cardList.category_bg_color,
            }}
          >
            {cardList.category}
          </button>
          <h2 className="card-title">{cardList.title}</h2>
          <div className="card-actions justify-start">
            <button
              className="justify-center items-center w-[141px] h-[40px] bg-red-500 rounded text-white"
              onClick={() => handleViewDetailsClick(cardList.id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatedCardList;
