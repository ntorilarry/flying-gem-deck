import { Icon2, Icon3, Icon4 } from "../../../assets";

const HomeHero1 = () => {
  return (
    <div className="bg-[#1FB8AA] overflow-x-hidden">
      <div className="relative">
        <div className="absolute animate-float top-[50px] right-[150px] hidden lg:block">
          <img src={Icon2} alt="" />
        </div>
        <div className="absolute animate-float-slow top-[50px] left-[150px] hidden lg:block">
          <img src={Icon3} alt="" />
        </div>
        <div className="absolute animate-float-fast top-[550px] right-[450px] hidden lg:block">
          <img src={Icon4} alt="" />
        </div>
        <div className="absolute animate-float-faster top-[550px] left-[450px] hidden lg:block">
          <img src={Icon2} alt="" />
        </div>
      </div>
      <section className=" flex w-full h-[100vh] items-center justify-center">
        <div className="container px-4 mx-auto">
          <img
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-16 h-16 mx-auto mb-4"
            src="https://res.cloudinary.com/djmddrfv2/image/upload/v1741105926/flying-gem-logo_otxn1h.png"
            alt=""
          />
          <div className="text-center">
            <span
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="inline-block mb-4 text-sm text-white font-medium tracking-tighter"
            >
              Welcome to Flying-Gem Consulting
            </span>
            <h2
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="font-heading mb-6 text-5xl lg:text-6xl xl:text-7xl text-white tracking-9xl  mx-auto"
            >
              {/* <Typewriter
                key="unique-key"
                text=" imagination"
                speed={100}
              /> */}
              Where strategy meets {" "}
              <span className="font-playfair italic font-semibold">
                imagination
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="800"
              className="my-8 text-base font-normal text-white md:max-w-3xl mx-auto"
            >
              You are not just here to LEARN - you are here to transform how
              your team thinks, leads, and grows. We turn real-world business
              into immersive, unforgettable learning experiences.
            </p>

            <a
              href="#mission"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="inline-block mt-6 px-8 py-4 font-medium tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
            >
              Launch Your Strategy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero1;
