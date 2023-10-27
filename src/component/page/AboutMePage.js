import React, { useEffect, useState } from "react";
import classNames from "classnames";

function AboutMePage(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const [isHidden, setIsHidden] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치를 감지합니다.
      const position = window.pageYOffset;
      setScrollPosition(position - 400);
    };

    // 스크롤 이벤트 리스너를 추가합니다.
    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너를 제거합니다.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <section className="relative h-screen  ">
      {/*추가전*/}
      {/*<svg*/}
      {/*  className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
      {/*  aria-hidden="true"*/}
      {/*>*/}
      {/*  <defs>*/}
      {/*    <pattern*/}
      {/*      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
      {/*      width={200}*/}
      {/*      height={200}*/}
      {/*      x="50%"*/}
      {/*      y={-1}*/}
      {/*      patternUnits="userSpaceOnUse"*/}
      {/*    >*/}
      {/*      <path d="M100 200V.5M.5 .5H200" fill="none" />*/}
      {/*    </pattern>*/}
      {/*  </defs>*/}
      {/*  <svg x="50%" y={-1} className="overflow-visible fill-gray-50">*/}
      {/*    <path*/}
      {/*      d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"*/}
      {/*      strokeWidth={0}*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*  <rect*/}
      {/*    width="100%"*/}
      {/*    height="100%"*/}
      {/*    strokeWidth={0}*/}
      {/*    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"*/}
      {/*  />*/}
      {/*</svg>*/}
      {/*추가전*/}

      <div className="flex h-full w-full flex-col items-center justify-end dark:bg-black lg:flex-row">
        <div className="mt-14 flex h-full flex-grow items-center justify-center">
          <p className="animate-slideUpSm flex flex-col text-center font-NanumMyeongjo text-2xl dark:text-white">
            <p className="text-xl md:text-2xl">웹 프론트엔드 개발 지원자</p>
            <p className="mb-5 text-3xl font-bold dark:text-amber-500 md:text-4xl">
              여인철(Yeo Incheol)
            </p>
            <p className="mb-5 hidden max-w-[27rem] text-lg md:inline md:max-w-[30rem] md:text-xl">
              안녕하세요! 반도체 장비 전장설계 4년차 엔지니어에서 웹 프론트엔드
              개발자로 새로운 커리어를 준비하고 있는 <br />
              <span className="font-bold dark:text-amber-500">여인철</span>
              이라고 합니다.
            </p>
          </p>
        </div>
        <div className="flex h-full items-end justify-center lg:pr-16 ">
          <div className="lg:w-[28rem absolute h-96 w-80 -translate-y-24 translate-x-4  animate-pulse border-8 border-amber-300/60 dark:border-amber-400/60 lg:h-[34rem] lg:w-[29rem] lg:translate-x-8 lg:border-[1.2rem]"></div>
          <div className="absolute h-96 w-80 -translate-y-12 animate-pulse border-4 border-slate-300/40 dark:border-amber-300/30 lg:h-[34rem] lg:w-[28rem] lg:border-[0.8rem]"></div>
          <img
            className=" z-40 h-[30rem] object-cover object-top lg:h-auto"
            src="/MyPhoto.png"
            alt="My Photo"
          />
        </div>
      </div>

      <div className="overflow-hidden dark:bg-black">
        <h2
          className="font-FjallaOne truncate text-[2.7rem] font-bold  dark:text-amber-500 sm:text-[4.5rem] md:text-[5.2rem] lg:text-[9rem]"
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          YEO INCHEOL / LOGAN YEO
        </h2>
      </div>

      <div className="h-full bg-slate-100"></div>

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
