import React from "react";
import littleLemon from "../images/littlelemon_logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" bg-[#eeeeee] px-[10vw] py-[1vh] border-b-2 border-[#cacaca] drop-shadow-md sticky top-0 w-full z-50">
        <nav>
          <ul className=" flex justify-around font-medium items-center h-[7vh]  ">
            <NavLink className="  w-[15vw] h-full flex items-center justify-center cursor-pointer">
              <img src={littleLemon} alt="Logo" className=" w-[10vw] h-[5vh]" />
            </NavLink>
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Menu</li>
            <li className=" cursor-pointer">Reservation</li>
            <li className=" cursor-pointer">Order Online</li>
            <li className=" cursor-pointer">Login</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
