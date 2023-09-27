import React, { useEffect, useState } from "react";
import DonatedCardList from "../DonatedCardList/DonatedCardList";

const Donation = () => {
  const [donatedCards, setDonatedCards] = useState([]);
  console.log(donatedCards);

  useEffect(() => {
    const storedDonatedCards = JSON.parse(localStorage.getItem("donatedCards"));
    if (storedDonatedCards) {
      setDonatedCards(storedDonatedCards);
    }
    console.log(storedDonatedCards);
  }, []);

  return (
    <div>
      <h2 className="flex justify-center pt-10 text-3xl font-bold border-b">
        Donated Cards
      </h2>
      <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full mt-6 pl-6">
        <div className="grid md:grid-cols-2 px-10 gap-10">
          {donatedCards.map((cardList, index) => (
            <DonatedCardList key={index} cardList={cardList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
