import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import hamBurgerMenu from "../../assets/images/hamburgerMenu.svg";
import Close from "../../assets/images/close.svg";
import "./NavBar.css";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log("button clicked");
    setToggle(!toggle);
  };
  return (
    <div className=" w-full h-[80px]">
      <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full h-full flex items-center justify-between md:px-20 px-10 pt-8">
        <div>
          <Link to="/">
            <img src={Logo} alt="" className="h-[60px]" />
          </Link>
        </div>

        <div>
          <nav className="hidden md:flex items-center justify-between gap-9">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/donation">Donation</NavLink>

            <NavLink to="/statistics">Statistics</NavLink>
          </nav>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          <img src={toggle ? Close : hamBurgerMenu} alt="" />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10  w-full px-8 transition-transform  ease-in-out  md:hidden"
            : "hidden"
        }
      >
        <nav className="flex flex-col pt-4 bg-white">
          <NavLink to="/" className=" p-4 hover:bg-gray-100 border-b">
            Home
          </NavLink>

          <NavLink to="/donation" className=" p-4 hover:bg-gray-100 border-b">
            Donation
          </NavLink>

          <NavLink to="/statistics" className=" p-4 hover:bg-gray-100 border-b">
            Statistics
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
