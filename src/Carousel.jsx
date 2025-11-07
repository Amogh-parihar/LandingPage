import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    name: "Riya Sharma",
    title: "Engineering Student",
    desc: "''UpToSkils helped me prepare for coding interviews efficiently. The AI-generated questions always matched my skill level, making my learning smoother and more fun!.''",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    title: "Developer Intern",
    desc: "''The global doubt sessions are amazing! I get instant responses from peers and mentors-learning never stops here.''",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Sneha Verma",
    title: "Data Science Enthusiast",
    desc: "''The repetition feature helped me master weak topics. The contests make practice exciting and competitive!.''",
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Aditya Saxena",
    title: "Competitive Programmer",
    desc: "''UpToSkils is lke having a smart tutor who never runs out of questions. The Al-generated practice sets are incredibly adaptive.''",
    color: "bg-orange-500",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto Slide Effect (pauses when hovered)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="w-full mx-auto px-4 py-10 relative overflow-hidden">
      {/* Header + Arrows */}
      <div className="flex justify-center items-center mb-6">
        <h2
          className="text-2xl sm:text-4xl font-bold text-center pb-2 
                       bg-blue-700  
                       dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          What Our Learners Say
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="relative h-66 overflow-hidden rounded-t-xl bg-blue-300"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full h-66 flex flex-col justify-between items-center bg-blue-300 text-center px-6 py-4 text-black"
            >
              {/* Title at Top */}
              <p className="sm:text-md md:text-xl max-w-xs lg:max-w-md">
                {item.desc}
              </p>

              {/* Spacer handled by justify-between */}

              {/* Description at Bottom */}
              <div>
                <h3 className="sm:text-2xl md:text-3xl font-bold">
                  {item.name}
                </h3>
                <h3 className="sm:text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center p-4 gap-2 bg-blue-300 rounded-b-xl">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-gray-800 scale-110" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
