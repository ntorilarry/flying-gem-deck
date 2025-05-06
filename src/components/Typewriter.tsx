import { useTypewriter } from "../helper/useTypewriter";

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <>{displayText}</>;
};

export default Typewriter;
