import React from "react";
import individual from "../assets/Individual.png";

const LowerBodySection = () => {
  return (
    <div className="text-center text-black p-10 text-4xl">
      <p className="font-bold">
        Suiwise Is For Everyone, Get Loans With
        <br />
        Lower Interest At A Faster Rate
      </p>
      <img
        src={individual}
        alt="Individual"
        className="mx-auto content-center p-14 m-14 w-1/4 border-2 border-gray-200 shadow-2xl bg-white rounded-3xl hover:border-2 hover:border-blue-500"
      />
      <p className="mb-10">Individuals</p>
      <p className="text-center font-thin text-2xl p-18">
        Find out more about Suiwise connecting Lenders and Borrowers across Africa
      </p>
      <button className="text-blue-600 p-4 px-20 border-2 border-blue-600 rounded-full m-10 text-xl hover:bg-blue-600 hover:text-white">
        Learn More
      </button>
    </div>
  );
};

export default LowerBodySection;
