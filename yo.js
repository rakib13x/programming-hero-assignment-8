import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

const Cards = () => {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched data", data);
        setShowCards(data);
      })
      .catch((error) => {
        console.log("Error Fetching data", error);
      });
  }, []);
  return (
    <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full mt-6 pl-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 px-10 pt-20">
        {showCards.map((card) => (
          <CardDetails key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

const handleDonateClick = (card) => {
  if (!card) {
    toast.error("Card data not available. Cannot donate.");
  } else {
    const price = parseFloat(card.price.replace("$", ""));
    const updatedTotalDonation = totalDonationAmount - price;

    if (updatedTotalDonation < 0) {
      toast.error("Not enough funds for donation.");
    } else {
      setTotalDonationAmount(updatedTotalDonation);

      const donationDetails = {
        cardId: card.id,
        amount: price,
        timestamp: new Date().toISOString(),
      };

      const existingDonations =
        JSON.parse(localStorage.getItem("donations")) || [];

      const updatedDonations = [...existingDonations, donationDetails];

      localStorage.setItem("donations", JSON.stringify(updatedDonations));

      setYourDonation((prevDonation) => prevDonation + price);
      setDonations(updatedDonations);

      toast.success(`Donation successful! Thank you for donating $${price}.`);
    }
  }
};
