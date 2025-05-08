const Mission = () => {
  return (
    <section id="mission" className=" bg-[#1FB8AA] overflow-x-hidden">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
          <div className="h-full  lg:order-2 ">
            <div className="relative h-full lg:h-auto">
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1600"
                data-aos-once="true"
                className="relative"
              >
                <img
                  className="rounded-xl"
                  src="https://www.orangemantra.com/blog/wp-content/uploads/2016/07/Om-corprate-traning-.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start lg:order-1 ">
            <div>
              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="200"
                className="text-lg font-semibold  text-white"
              >
                Mission Briefing: The Problem We are Solving
              </p>
              <h2
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="400"
                className="mt-4 text-3xl font-normal text-white "
              >
                Forget everything you know about{" "}
                <span className="font-playfair italic font-semibold">
                  traditional training...
                </span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-once="true"
                className="text-sm  text-white mt-6"
              >
                Most training programs are designed for compliance — not
                transformation. They check boxes. They deliver slides. But they
                rarely change behavior.
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-once="true"
                className="mt-6 text-sm  text-white"
              >
                At Flying-Gem, we do things differently. We turn real business
                challenges into immersive experiences where people feel, act,
                and grow.
              </p>

              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                className="mt-6 text-sm  text-white"
              >
                Whether it’s navigating bias, building strategic leaders, or
                aligning teams to purpose — we create the kind of learning that
                sticks.
              </p>

              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
                className="mt-6 text-base italic  text-white"
              >
                Because the future doesn’t need more training. It needs
                transformation.
              </p>
              <a
                href="#blueprint"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1400"
                className="inline-block mt-6 px-8 py-4 font-medium tracking-tighter bg-green-400 hover:bg-green-500 text-white focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
              >
                Explore the Blueprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
