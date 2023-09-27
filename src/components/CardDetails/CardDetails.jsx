import React from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = ({ card }) => {
  console.log(card.title);

  return (
    <Link to={`donation-page/${card.id}`}>
      <div className="card w-60 bg-base-100 ">
        <figure>
          <img
            src={card.picture}
            alt={card.title}
            className="w-full h-[180px]"
          />
        </figure>
        <div
          className="card-body  rounded h-[160px] mb-6 space-y-2"
          style={{ backgroundColor: card.card_bg_color }}
        >
          <h2 className="card-title ">
            <div
              className="badge rounded-none "
              style={{
                backgroundColor: card.category_bg_color,
                color: card.text_button_bg_color,
              }}
            >
              {card.category}
            </div>
          </h2>
          <p className="font-semibold">{card.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardDetails;
