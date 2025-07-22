import Slider from "../Comopnents/Slider";
import BottomBar from "../Comopnents/BottomBar";    
import about from "../assets/about.png";
import { useModal } from "../Modal/ModalContext";


export default function Testimonial() {
    const { openModal } = useModal();
  return (
    <>
    <section
      className="relative w-full flex flex-col pt-10 pb-5 lg:flex-row items-center justify-between min-h-[80vh] px-4 sm:px-8 py-10 gap-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* 🔲 Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent z-10"></div>

      {/* 🧱 Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-6 md:px-12 lg:px-24 pt-4 pb-8 gap-6 lg:gap-8 z-20">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#2064C4] font-bold text-left sm:text-lg mb-4 max-w-xl mx-auto lg:mx-0">
            Testimonials
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
          What our amazing customers think
          </h1>
          <p className="mb-5">We are committed to providing high-quality services tailored to meet the diverse needs of our customers. When you need a help in Austin, TX or any nearby cities, you can count on our professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              onClick={openModal}
              className="bg-gradient-to-b from-[#F2C30B] to-[#E18412] hover:from-[#E18412] hover:to-[#F2C30B] text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
            <Slider />
          </div>
        </div>
      </div>     
    </section>
     <BottomBar />
     </>
  );
}
