import React, { createContext, useContext, useState } from "react";

const DonationContext = createContext();

export function useDonationContext() {
  return useContext(DonationContext);
}

export function DonationProvider({ children }) {
  const [donatedCards, setDonatedCards] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  return (
    <DonationContext.Provider
      value={{
        donatedCards,
        setDonatedCards,
        totalDonation,
        setTotalDonation,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}
