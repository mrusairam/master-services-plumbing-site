import React from 'react';
import hero from '../assets/hero.png'; 
import BottomBar from '../Comopnents/BottomBar';
import { useModal } from "../Modal/ModalContext";


export default function Hero() {
  const { openModal } = useModal();
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-6 md:px-12 lg:px-24 pt-4 pb-8 gap-6 lg:gap-8">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#2064C4] font-bold text-base sm:text-lg mb-4 max-w-xl mx-auto lg:mx-0">
            Reliable HVAC, electric, and plumbing in Austin, TX
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Service calls, repairs<br /> and replacement -<br /> guaranteed
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              onClick={openModal}
              className="cursor-pointer bg-gradient-to-b from-[#F2C30B] to-[#E18412] hover:from-[#E18412] hover:to-[#F2C30B] text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
            <img
              src={hero}
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
}
