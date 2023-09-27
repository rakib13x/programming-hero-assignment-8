// Cards.jsx

import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Statistics from "../Statistics/Statistics.jsx";
import Hero from "../Hero/Hero";

const Cards = ({ totalDonation, totalDonated }) => {
  const [showCards, setShowCards] = useState([]);
  const [yourDonation, setYourDonation] = useState(0);
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setShowCards(data);
        const totalAmount = data.reduce((total, card) => {
          const price = parseFloat(card.price.replace("$", ""));
          return total + price;
        }, 0);
        setTotalDonationAmount(totalAmount);
      })
      .catch((error) => {
        console.log("Error Fetching data", error);
      });

    const storedDonations = JSON.parse(localStorage.getItem("donated")) || [];
    setDonations(storedDonations);
  }, []);

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

  return (
    <div className="md:max-w-[1400px] md:px-20 max-w-[600px] w-full mt-6 mb-6 sm:flex flex-col items-center">
      <Hero cards={showCards} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 pt-20">
        {showCards.map((card) => (
          <CardDetails
            key={card.id}
            card={card}
            onDonateClick={handleDonateClick}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cards;
