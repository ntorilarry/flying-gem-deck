const Blueprint = () => {
  return (
    <section
      id="blueprint"
      className="py-10 bg-[#1FB8AA] sm:py-16 lg:py-24 overflow-x-hidden"
    >
      <div className="px-4 mx-auto max-w-[90rem] sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl"
          >
            Your Flying-Gem{" "}
            <span className="font-playfair italic font-semibold">
              Blueprint
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-white"
          >
            We don’t deliver one-size-fits-all training. We partner with you
            through a powerful four-phase journey built for sustainable impact.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"
          >
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 lg:grid-cols-4 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="800"
                className="mt-6 text-base font-semibold text-white md:mt-10"
              >
                Discovery & Immersion
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1000"
                className="mt-4 text-sm text-white"
              >
                We embed ourselves in your environment, gaining deep insights
                into your team, challenges, and culture through observation and
                authentic engagement.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1200"
                className="mt-6 text-base font-semibold text-white md:mt-10"
              >
                Insightful Assessment
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1400"
                className="mt-4 text-sm text-white"
              >
                Using cutting-edge tools, we uncover strengths, blind spots, and
                opportunities, ensuring a data-driven approach tailored to your
                organization.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1600"
                className="mt-6 text-base font-semibold text-white md:mt-10"
              >
                Strategic Design & Roadmap
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1800"
                className="mt-4 text-sm text-white"
              >
                We translate insights into an actionable plan, providing a clear
                roadmap that connects understanding with execution for real
                transformation.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 4 </span>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="2000"
                className="mt-6 text-base font-semibold text-white md:mt-10"
              >
                The Innovation Playground
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="2200"
                className="mt-4 text-sm text-white"
              >
                We bring learning to life through immersive simulations,
                gamified experiences, and interactive challenges — turning
                strategy into action and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
