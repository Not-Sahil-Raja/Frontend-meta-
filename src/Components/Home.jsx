import React from "react";
import food1 from "../Images/food1.avif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-[85vh] bg-[#5f7c5f] px-[10vw] py-[5vh]">
        <div className=" w-full  h-full flex items-center justify-around px-[1vw] py-[1vh] gap-[1vw]">
          <div className=" bg-[#95c05e52] rounded-lg backdrop-blur-sm flex-[2] flex flex-col justify-center h-full px-[2vw] drop-shadow-lg">
            <h1 className=" font-semibold text-4xl top-auto text-[#ffd258] ">
              Little Lemon
            </h1>
            <h3 className="  font-medium  text-[#2c2c2c] mt-[.5vh] text-xl">
              Chicago
            </h3>
            <p className=" text-[#e9e9e9] mt-[.8vh] text-lg">
              We are a family owned Mediterraneran restaurant,
              <br /> focused on traditional recipes servred with a modern twist.
            </p>
            <button
              className=" mt-[10vh] bg-[#d3d353] px-[1vw] w-[10vw] py-[2vh] rounded font-medium drop-shadow-md hover:brightness-110 transition-all active:brightness-95"
              onClick={() => navigate("/TableReservations")}
            >
              Reserve Table
            </button>
          </div>
          <div className=" w-[25vw] overflow-hidden h-full  object-cover bg-slate-400  rounded-lg">
            <img
              src={food1}
              alt="foodPic"
              className=" h-full scale-105 hover:scale-100 transition-all duration-500 w-full object-cover ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
