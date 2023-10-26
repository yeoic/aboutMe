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
      <div className="flex h-full w-full flex-col items-center justify-end">
        <div className="flex flex-grow flex-col items-center justify-center ">
          <p className="pt-24 text-center font-NanumMyeongjo text-2xl">
            <p className="mb-6 text-4xl">안녕하세요!</p>
            <p>웹 프론트엔드 개발 지원자</p>
            <p className="mb-5 text-4xl font-bold">
              여인철(Yeo Incheol)
              <p className="text-right text-sm">입니다.</p>
            </p>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="absolute h-96 w-80 -translate-y-6 translate-x-4 border-8 border-amber-300/60"></div>
          <div className="absolute  h-96 w-80 translate-y-4 border-4"></div>
          <img className="z-30" src="/MyPhoto.png" alt="My Photo" />
        </div>
      </div>

      <div
        className={classNames(
          "absolute inset-0 z-40 h-full w-full bg-white dark:bg-black ",
          isHidden ? "animate-fadeOut" : "",
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-x-1 sm:flex-row ">
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
