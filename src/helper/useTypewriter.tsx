import { useState, useEffect } from "react";

export const useTypewriter = (text, speed) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let currentText = "";

    const typingInterval = setInterval(() => {
      currentText += text.charAt(i);
      setDisplayText(currentText);
      i++;
      if (i >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};
