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
  const [filteredCards, setFilteredCards] = useState([]); // Initially, set it to an empty array

  useEffect(() => {
    // Fetch card data
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setShowCards(data);
        setFilteredCards(data); // Initially, set filteredCards to show all cards
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
    // Donation handling code remains the same
    // ...

    // Make sure to update filteredCards if needed
    setFilteredCards(showCards);
  };

  // Function to handle search
  const handleSearch = (searchQuery, categoryQuery) => {
    let filtered = [...showCards];

    if (searchQuery) {
      filtered = filtered.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryQuery) {
      filtered = filtered.filter((card) =>
        card.category.toLowerCase().includes(categoryQuery.toLowerCase())
      );
    }

    setFilteredCards(filtered);
  };

  return (
    <div className="md:max-w-[1400px] md:px-20 max-w-[600px] w-full mt-6 mb-6 sm:flex flex-col items-center">
      <Hero onSearch={handleSearch} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 pt-20">
        {filteredCards.map((card) => (
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
