import React, { useEffect } from "react";
import { useDonationContext } from "../../DonationContext"; // Import the context hook

const DonatedCardList = ({ cardList }) => {
  const { donatedCards, setDonatedCards, totalDonation, setTotalDonation } =
    useDonationContext();
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

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-md">
        <figure>
          <img src={cardList.picture} alt="Movie" className="h-full" />
        </figure>
        <div className="card-body">
          <button className="card-actions justify-center items-center bg-red-500 h-[25px] w-[64px] rounded">
            health
          </button>
          <h2 className="card-title">title</h2>
          <div className="card-actions justify-start">
            <button className="justify-center items-center w-[141px] h-[40px] bg-red-500 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatedCardList;
