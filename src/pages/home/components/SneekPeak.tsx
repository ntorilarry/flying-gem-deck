import { sneekPeakData } from "../../../data/SneekPeakData";

const SneekPeak = () => {
  return (
    <section className=" bg-[#1FB8AA] ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="text-center mb-10">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
            className="text-3xl font-normal text-white sm:text-4xl xl:text-5xl"
          >
            Sneak Peek:{" "}
            <span className="font-playfair italic font-semibold">
              The Bias Resilience Experience
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-3 sm:text-left">
          {sneekPeakData.data.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={index * 400}
              key={index}
              className={`group relative block ${item.bgColor} border border-white/50 rounded-xl focus:outline-none`}
            >
              <div className="z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className=":text-lg leading-tight font-semibold text-white group-hover:text-white/80">
                    {item.title}
                  </h3>
                  <p className="mt-2 mb-6 text-base text-white bg-transparent">
                    {item.subTitle}
                  </p>

                  {item?.outcome.map((item, index) => (
                    <p
                      key={index}
                      className="mb-1  text-sm font-normal text-white"
                    >
                      - {item.point}
                    </p>
                  ))}
                  <p className="mt-4  text-base text-white bg-transparent">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneekPeak;
