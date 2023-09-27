import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory
import { useDonationContext } from "../../DonationContext"; // Import the context hook

const DonatedCardList = ({ cardList }) => {
  console.log(cardList);
  const { donatedCards, setDonatedCards, totalDonation, setTotalDonation } =
    useDonationContext();
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
            style={{
              backgroundColor: cardList.card_bg_color,
              color: cardList.text_button_bg_color,
            }}
            className=" justify-center items-center h-[25px] w-[64px] rounded"
          >
            {cardList.category}
          </button>
          <h2
            className="card-title"
            style={{
              color: cardList.text_button_bg_color,
            }}
          >
            {cardList.title}
          </h2>
          <div className="card-actions justify-start">
            <button
              style={{
                backgroundColor: cardList.card_bg_color,
                color: cardList.text_button_bg_color,
              }}
              className="justify-center items-center w-[141px] h-[40px] rounded "
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
