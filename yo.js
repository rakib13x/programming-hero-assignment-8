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
