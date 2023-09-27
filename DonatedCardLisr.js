import React from "react";

const DonatedCardList = ({ cardList }) => {
  console.log(cardList.price);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
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
