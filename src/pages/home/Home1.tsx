import Blueprint from "./components/Blueprint";
import Challenge from "./components/Challenge";
import Convinced from "./components/Convinced";
import HomeHero1 from "./components/HomeHero1";
import Mission from "./components/Mission";

const Home1 = () => {
  return (
    <div>
      <HomeHero1 />
      <Mission />
      <Blueprint />
      <Challenge />
      <Convinced />
    </div>
  );
};

export default Home1;
