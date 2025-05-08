import { useEffect, useState } from "react";
import Blueprint from "./components/Blueprint";
import Challenge from "./components/Challenge";
import Convinced from "./components/Convinced";
import HomeHero1 from "./components/HomeHero1";
import Mission from "./components/Mission";
import { OurApproach } from "./components/OurApproach";
import OurSolution from "./components/OurSolution";
import SneekPeak from "./components/SneekPeak";
import { motion } from "framer-motion";
import { HummingBird } from "../../assets";

const Home1 = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const pathVariants = {
      start: {
        x: -100,
        y: -100,
        opacity: 0,
      },
      animate: {
        x: ["-10vw", "20vw", "80vw", "60vw", "40vw", "10vw", "-10vw"],
        y: ["-10vh", "30vh", "10vh", "50vh", "30vh", "10vh", "-10vh"],
        opacity: 1,
        transition: {
          x: {
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          y: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 1,
          },
        },
      },
    };

    if (!isMounted) return null;
  return (
    <div>
      <HomeHero1 />
      <Mission />
      <Blueprint />
      <Challenge />
      <Convinced />
      <OurSolution />
      <SneekPeak />
      <OurApproach />
      <motion.div
        className="fixed z-[9999] w-48 md:w-64 pointer-events-none"
        initial="start"
        animate="animate"
        variants={pathVariants}
        style={{
          willChange: "transform",
          transformOrigin: "center center",
          top: "10vh", // Add positioning to avoid it being out of view
          left: "10vw",
        }}
      >
        <img
          src={HummingBird}
          alt="Flying hummingbird animation"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Home1;
