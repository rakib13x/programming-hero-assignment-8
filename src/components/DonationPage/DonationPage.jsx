import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationPage = () => {
  const cardsData = useLoaderData();
  const { id } = useParams();
  const cardData = cardsData.find((cardData) => cardData.id == id);
  const backgroundImageUrl = cardData ? cardData.picture : "";

  const [donated, setDonated] = useState(false);
  const [bgBlack, setBgBlack] = useState(false);

  const handleDonateClick = () => {
    if (!cardData) {
      toast.error("Card data not available. Cannot donate.");
    } else {
      toast.success(
        `Donation successful! Thank you for donating $${cardData.price}.`
      );

      addDonatedCardToLocalStorage(cardData);

      setDonated(true);

      setBgBlack(true);
    }
  };

  const addDonatedCardToLocalStorage = (cardData) => {
    const donatedCards = JSON.parse(localStorage.getItem("donatedCards")) || [];
    donatedCards.push(cardData);
    localStorage.setItem("donatedCards", JSON.stringify(donatedCards));
  };

  const buttonClasses = `btn btn-primary absolute left-6 bottom-4 z-100${
    bgBlack ? " bg-black" : ""
  }`;

  return (
    <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full mt-10 px-14 ">
      <div
        className="hero h-[700px] relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className=" absolute left-0 bottom-0 h-20 hero-overlay bg-opacity-60"></div>
            <button
              className={buttonClasses}
              onClick={handleDonateClick}
              disabled={donated}
            >
              {donated ? "Donated" : `Donate $${cardData ? cardData.price : 0}`}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DonationPage;
