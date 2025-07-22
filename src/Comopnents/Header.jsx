import map_icon from "../assets/map_icon.png";
import phone_icon from "../assets/phone_icon.png";

export default function Header() {
  return (
    <div className="bg-white hidden md:block"> {/* 👈 hides on small screens */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-sm text-gray-700">

        {/* Left: Logo + Services */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-600">Master</span>{' '}
            <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-[13px] text-blue-600">AC • Electric • Plumbing</p>
        </div>

        {/* Center: Office Address */}
        <div className="flex items-center gap-2 justify-center md:justify-start text-[13px] flex-wrap text-center md:text-left">
          <img src={map_icon} alt="Location Icon" className="w-5 h-5 object-contain" />
          <div>
            <p className="font-bold text-blue-700 uppercase text-[12px]">Offices</p>
            <p className="text-gray-700 max-w-[220px] mx-auto md:mx-0">
              2236 Brentwood Drive Austin, TX 78758
            </p>
          </div>
        </div>

        {/* Right: Emergency Call */}
        <div className="flex items-center gap-2 justify-center md:justify-end text-[13px] flex-wrap text-center md:text-left">
          <img src={phone_icon} alt="Phone Icon" className="w-5 h-5 object-contain" />
          <div>
            <p className="font-bold text-blue-700 uppercase text-[12px]">Emergency Calls</p>
            <p className="text-gray-700">123-456-7890</p>
          </div>
        </div>

      </div>
    </div>
  );
}
