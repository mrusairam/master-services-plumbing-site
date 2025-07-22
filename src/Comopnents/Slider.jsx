import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Exceptional service! The team arrived on time and fixed the issue quickly. Highly recommended!",
    name: "Sarah Johnson",
  },
  {
    id: 2,
    quote:
      "They were very professional and polite. The pricing was transparent and fair.",
    name: "Michael Thompson",
  },
  {
    id: 3,
    quote:
      "Great experience! I’ll definitely use their services again in the future.",
    name: "Emily Carter",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => setCurrent(index);

  // ✅ Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden px-4 py-12">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full px-6"
          >
            <div className="w-full h-72 md:h-80 border-2 border-[#F2920B] bg-transparent backdrop-blur-md p-8 rounded-xl text-center flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-gray-800 italic mb-4 max-w-2xl mx-auto">
                “{testimonial.quote}”
              </p>
              <h4 className="text-[#2064C4] font-semibold text-sm sm:text-base">
                — {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#F2920B]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
