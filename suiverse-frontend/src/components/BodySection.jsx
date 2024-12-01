import backgroundImage from "../assets/background-image.jpg"; // Import the image
import React from "react";
import LowerBodySection from "./LowerBodySection"


const BodySection = () => {
  return (
    <div className="body-section">
     <div className="relative w-full h-screen">
      <img 
        src={backgroundImage} 
        alt="background" 
        className="w-full h-full object-cover" 
      />

      {/* Overlay to improve text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full text-white text-center mt-7">
        <h2 className="text-4x1">Welcome to SuiWise</h2>
        <p className ="sm:text-4x1 lg:text-5x1 mt-7">Decentralized Peer-Peer MicroLoans</p>
      </div>
    </div>

      {/* Text on top of the image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl ">The Simple, Safer Way To Loan Money Online</h2>
        <button className="border-2 border-blue-600  text-white p-3 rounded-2xl text-xl mt-7 mb-4  bg-blue-600 hover:bg-blue-50 hover:text-blue-600 ">Sign Up For Free</button>
        <p className="sm:text-4x1 lg:text-5x1 mt-7">Need Capital To Start A Business? Open An Account Now</p>
      </div>
      <LowerBodySection />  {/* LowerBodySection added here */}
    </div>
  
  );
};

export default BodySection;