import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import CardDetails from "./components/CardDetails/CardDetails.jsx";
import DonationPage from "./components/DonationPage/DonationPage";
import Statistics from "./components/Statistics/Statistics";
import { DonationProvider } from "./DonationContext"; // Import the context provider

function App() {
  return (
    <DonationProvider>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </DonationProvider>
  );
}

export default App;
