import React, { useEffect, useState } from "react";
import classNames from "classnames";

function AboutMePage(props) {
  const [isHidden, setIsHidden] = useState(false);
  const [age, setAge] = useState(0);

  /**
   *
   */

  const [currentNumber, setCurrentNumber] = useState("01");
  const [nextNumber, setNextNumber] = useState("02");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentNumber(nextNumber);
        setNextNumber((prev) =>
          (parseInt(prev) + 1).toString().padStart(2, "0"),
        );
        setIsAnimating(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentNumber, nextNumber]);

  /**
   *
   */

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(!isHidden);
    }, 5000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (age < 32) {
        setAge((prev) => prev + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [age]);

  return (
    <section className="relative h-screen w-screen dark:bg-black">
      <div className="h-full w-full bg-amber-200"></div>
      <div
        className={classNames(
          "absolute inset-0  h-full w-full bg-white dark:bg-black ",
          isHidden ? "animate-fadeOut" : "",
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-x-1  sm:flex-row ">
          <p className="w-[20rem] text-right text-[13rem] font-bold dark:text-amber-500 sm:text-right">
            '{age}
          </p>
          <div>
            <p className="font-NanumMyeongjo text-2xl font-bold dark:text-white sm:text-3xl sm:font-bold md:text-5xl md:font-normal">
              이렇게 살 수도
              <br /> 이렇게 죽을 수도 없을 때<br /> 서른 살은 온다
              <p
                className={classNames(
                  "text-left font-NanumMyeongjo text-sm text-gray-400",
                )}
              >
                최승자의 시 "삼십세" 중에서
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMePage;
