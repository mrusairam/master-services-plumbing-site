import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      {/* Top Section */}
      <div className="h-[30vh] bg-white flex flex-col justify-center items-center px-4 text-center">
        <p className="text-sm text-blue-700 font-semibold uppercase">
          Request an appointment
        </p>
        <h2 className="text-xl sm:text-2xl font-bold my-2">
          Like a quote? Same day services
        </h2>
      </div>

      {/* Cards - Floating */}
      <div className="absolute z-30 w-full top-[22vh] px-4 flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400 w-full md:w-1/4 text-center">
          <FaMapMarkerAlt className="text-2xl text-orange-500 mb-3 mx-auto" />
          <h4 className="font-semibold text-blue-700 mb-2">OFFICES</h4>
          <p className="text-black text-sm">
            2236 Brentwood Drive<br />Austin, TX 78758
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-400 w-full md:w-1/4 text-center">
          <FaEnvelope className="text-2xl text-blue-500 mb-3 mx-auto" />
          <h4 className="font-semibold text-blue-700 mb-2">EMAIL</h4>
          <p className="text-black text-sm">enquiries@website.com</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400 w-full md:w-1/4 text-center">
          <FaPhoneAlt className="text-2xl text-orange-500 mb-3 mx-auto" />
          <h4 className="font-semibold text-blue-700 mb-2">EMERGENCY CALLS</h4>
          <p className="text-black text-sm">123-456-7890</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[70vh] w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13948.312839967297!2d-97.7579991052912!3d30.391555646364803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3cd3bcd311%3A0xb6dc2042a51b6249!2sBrentwood%2C%20Austin%2C%20TX%2078757%2C%20USA!5e0!3m2!1sen!2s!4v1619654911936!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
    </div>
  );
}
