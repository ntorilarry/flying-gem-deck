export const OurApproach = () => {
  return (
    <div className="bg-[#1FB8AA]">
      <div className="max-w-7xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="text-center mb-10">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
            className="text-3xl font-normal text-white sm:text-4xl xl:text-5xl"
          >
            Why Our{" "}
            <span className="font-playfair italic font-semibold">
              Approach Works
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
            className="mt-4 text-base max-w-2xl mx-auto  text-white"
          >
            People don't change through information. They change through
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover h-[400px] rounded-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Features Image"
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-white text-xs font-medium uppercase">
                Our Approach
              </h3>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-white">
                  Gamification increases training engagement by 70%+.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-white">
                  Experiential learning boosts retention rates up to 80%.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-white">
                  Behavioral practice doubles the likelihood of lasting behavior
                  change.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-white">
                  Safe environment simulations allow participants to fail,
                  learn, and grow without risk.
                </p>
              </div>
            </div>

      
          </div>
        </div>
      </div>
    </div>
  );
};
