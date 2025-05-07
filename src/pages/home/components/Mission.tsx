const Mission = () => {
  return (
    <section className=" bg-[#1FB8AA]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
          <div className="h-full  lg:order-2 ">
            <div className="relative h-full lg:h-auto">
              <div className="relative">
                <img
                  className="rounded-xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start lg:order-1 ">
            <div>
              <p className="text-sm font-semibold  text-white">
                Mission Briefing: The Problem We are Solving
              </p>
              <h2 className="mt-8 text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                Forget everything you know about traditional training...
              </h2>
              <p className="text-base  text-white mt-9">
                Most training programs are designed for compliance — not
                transformation. They check boxes. They deliver slides. But they
                rarely change behavior.
              </p>
              <p className="mt-6 text-base  text-white">
                At Flying-Gem, we do things differently. We turn real business
                challenges into immersive experiences where people feel, act,
                and grow.
              </p>

              <p className="mt-6 text-base  text-white">
                Whether it’s navigating bias, building strategic leaders, or
                aligning teams to purpose — we create the kind of learning that
                sticks.
              </p>

              <p className="mt-6 text-base italic  text-white">
                Because the future doesn’t need more training. It needs
                transformation.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
