import React, { useEffect, useState } from "react";

function TypingText({ initialText, typingTextSpeed, textStyle }) {
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("A");

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === "A") {
        if (count <= initialText.length) {
          setText(initialText.substring(0, count + 1));
          setCount(count + 1);
          if (count === initialText.length) {
            setStep("B");
          }
        }
      } else if (step === "B") {
        if (count > 0) {
          setText(initialText.substring(0, count - 1));
          setCount(count - 1);
          if (count === 1) {
            setStep("A");
          }
        }
      }
    }, typingTextSpeed);

    return () => clearInterval(interval);
  }, [count, step]);

  return (
    <p className={textStyle}>
      {text}
      <span className="animate-blink">|</span>
    </p>
  );
}

export default TypingText;
