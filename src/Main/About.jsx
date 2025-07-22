import about from "../assets/about.png";
import plumber from "../assets/plumber.png";
import clock from "../assets/clock.png";
import tool from "../assets/tool.png";
import note from "../assets/note.png";
import { useModal } from "../Modal/ModalContext";


export default function About() {
    const { openModal } = useModal();
  return (
    <>
      {/* 🌄 Background Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 min-h-[550px] overflow-hidden sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-white to-transparent z-10"></div>

        {/* Hero Content */}
        <section className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-10 pb-8 gap-6 lg:gap-8">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
              <img
                src={plumber}
                alt="Plumber"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-[#2064C4] font-bold text-left text-base sm:text-lg mb-4 max-w-xl mx-auto lg:mx-0">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              Reliable home Services by local experts you can trust
            </h1>
            <p className="mb-4 text-gray-800">
              As a family-run, independent business, you can expect personalised service without the corporate price tag.
              As locals we understand that our reputation is everything which is why we aim to leave every customer happy
              with their projects and experience with us.
            </p>
            <p className="mb-4 text-gray-800">
              We provide a wide range of repair services plumbing, heating, air conditioning, and electrical work.
              Our skilled technicians are dedicated to delivering reliable solutions to ensure your comfort and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                onClick={openModal}
                className="cursor-pointer bg-gradient-to-b from-[#F2C30B] to-[#E18412] hover:from-[#E18412] hover:to-[#F2C30B] text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ Cards Section - Slightly Overlapping the Image Section */}
      <div className="relative z-30 -mt-12 flex flex-wrap justify-center items-center text-center gap-6 px-4 sm:px-8 pb-10">
        {/* Card 1 */}
        <div className="relative border-l-2 border-b-2 rounded-2xl border-[#F2920B]">
          <div className="w-full max-w-sm p-[2px] rounded-2xl border-r-2 border-t-2 border-[#005CB9]">
            <div className="rounded-2xl bg-gradient-to-bl from-transparent to-white backdrop-blur-md text-center p-6 w-full">
              <img src={clock} alt="Icon 1" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">60min response time</h3>
              <p className="text-black text-sm">
                Experience the difference with our rapid response. We'll be at your door in under 60 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border-l-2 border-b-2 rounded-2xl border-[#F2920B]">
          <div className="w-full max-w-sm p-[2px] rounded-2xl border-r-2 border-t-2 border-[#005CB9]">
            <div className="rounded-2xl bg-gradient-to-bl from-transparent to-white backdrop-blur-md text-center p-6 w-full">
              <img src={note} alt="Icon 2" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">We charge by job</h3>
              <p className="text-black text-sm">
                Honest pricing. Pay for the solution, not the hours spent. Fair prices, no surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border-l-2 border-b-2 rounded-2xl border-[#F2920B]">
          <div className="w-full max-w-sm p-[2px] rounded-2xl border-r-2 border-t-2 border-[#005CB9]">
            <div className="rounded-2xl bg-gradient-to-bl from-transparent to-white backdrop-blur-md text-center p-6 w-full">
              <img src={tool} alt="Icon 3" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">We're here for you</h3>
              <p className="text-black text-sm">
                Our dedicated team is available 24/7 to assist you with all your plumbing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
