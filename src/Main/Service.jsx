import React from "react";
import Card from "../Comopnents/Card";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import BottomBar from "../Comopnents/BottomBar";

const cardData = [
  {
    image: service1,
    icon: icon1,
    title: "Austin Plumbing Services",
    description: "From leak repairs to full system installs, 24/7 support available.",
    buttonText: "View Details",
  },
  {
    image: service2,
    icon: icon2,
    title: "Drain Cleaning Experts",
    description: "Expert drain unclogging and cleaning in minutes.",
    buttonText: "Get a Quote",
  },
  {
    image: service3,
    icon: icon3,
    title: "Water Heater Repair",
    description: "Same-day repair service for all types of heaters.",
    buttonText: "Book Now",
  },
];

export default function Service() {
  return (
    <>
    <div className="mt-12">
      <h3 className="text-2xl my-12 text-[#2064C4] font-semibold text-center">
        our services
      </h3>
      <h1 className="text-3xl mb-10 font-bold text-center">
        Providing high-quality services in Austin, TX
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
    <BottomBar/>
    </>
  );
}
