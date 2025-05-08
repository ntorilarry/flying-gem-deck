import { useState } from "react";
import { challengeData } from "../../../data/ChallengeData";
import ChallengeModal from "./ChallengeModal";

const Challenge = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleOpenDetails = (data) => {
    setOpenDetails(true);
    setSelectedChallenge(data);
  };

  return (
    <section className="py-12 bg-[#1FB8AA] sm:py-16 lg:py-20 overflow-x-hidden">
      <div className="px-4 mx-auto max-w-[90rem] sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-3xl font-normal text-white sm:text-4xl xl:text-5xl"
          >
            Choose Your{" "}
            <span className="font-playfair italic font-semibold">
              Challenge
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mt-4 text-base max-w-2xl mx-auto leading-7 text-white sm:mt-8 "
          >
            Every organization has its sticking points. Select the challenge
            you’re facing — and we’ll show you how Flying-Gem would tackle it.
          </p>
        </div>

        <div className="grid  grid-cols-1 gap-10 xl:lg:gap-16 mx-auto mt-16 text-center md:grid-cols-2 lg:grid-cols-3">
          {challengeData.data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay={index * 600}
              className="relative overflow-hidden transition-all duration-200 border border-white/50 rounded-xl border-neutral hover:bg-dark-gray group"
            >
              <div className="overflow-hidden aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover pointer-events-none transition-all duration-300 transform group-hover:scale-125"
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  controls={false}
                />
              </div>
              <div className="p-6 xl:px-8 xl:py-6">
                <h3 className=" text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm font-normal text-opacity-50 text-white">
                  {item.content}
                </p>
                <button
                  onClick={() => handleOpenDetails(item)}
                  className="inline-flex items-center justify-center mt-5 text-sm font-normal text-white"
                >
                  Read More
                  <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-neutral">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChallengeModal
        open={openDetails}
        onClose={() => setOpenDetails(false)}
        data={selectedChallenge}
      />
    </section>
  );
};
export default Challenge;
