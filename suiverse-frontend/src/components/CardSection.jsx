import React from "react";

// Import images directly for proper bundling
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/farmer.jpg";
import { text } from "@fortawesome/fontawesome-svg-core";

const CardSelection = () => {
  return (
    <section className="slider flex items-center justify-center min-h-screen bg-gradient-to-tl from-wheat to-wheat py-10">
      <div className="wrapper relative max-w-[1100px] w-full">
      
        {/* Left Arrow */}
        

        {/* Carousel Section Heading */}
        <h2 className="text-center text-[2.5rem] mb-6">OUR SURVEY</h2>

        {/* Carousel */}
        <ul className="carousel grid grid-flow-col auto-cols-[calc((100%/3)-12px)] gap-[16px] overflow-x-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {cardsData.map((card, index) => (
            <li
              key={index}
              className="card snap-start h-[342px] list-none bg-white rounded-lg pb-4 flex flex-col items-center justify-center cursor-pointer hover:border-2 hover:border-blue-600 hover:p-5 hover:shadow-2xl"
            >
              <div className="img flex items-center justify-center rounded-full w-[148px] h-[148px] border-4 border-white">
                <img
                  src={card.image}
                  alt="img"
                  draggable="false"
                  className="w-[140px] h-[140px] object-cover rounded-full "
                />
              </div>
              <h3 className="font-medium text-[1.56rem] mt-[30px] mb-[5px]">
                {card.name}
              </h3>
              <span className="text-[#6a6d78] text-[1.31rem]">{card.role}</span>
              <p className="font-medium text-[1.56rem] mt-[30px] mb-[5px]">
                {card.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Right Arrow */}
        
      </div>
    </section>
  );
};

// Data for the cards
const cardsData = [
  {
    image: img1,
    name: "oladupe Glory",
    role: "Markter",
    text: "I'm going to enjoy this app",
  },
  {
    image: img2,
    name: "Eddie John",
    role: "Farmer",
    text:"lower rates so exicted"
  },
  {
    image: img3,
    name: "Olowaope Johnson",
    role: "business man",
    text: "sui to Naira"
  },
  {
    image: img4,
    name: "Seyi Ogundipe",
    role: "Founder of Ad-astra",
    text: "loans to help business"
  },
];

export default CardSelection;