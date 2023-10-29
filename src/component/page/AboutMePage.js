import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LogoSlider from "../LogoSlider";
import { Link } from "react-router-dom";

function AboutMePage(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <section
      className={classNames(
        "relative h-screen",
        // isHidden ? "" : "overflow-hidden",
      )}
    >
      <div className="flex h-full flex-col items-center justify-end dark:bg-black lg:flex-row">
        <div className="mt-14 flex h-full flex-grow items-center justify-center">
          <p className="animate-slideUpSm flex flex-col text-center font-NanumMyeongjo text-2xl dark:text-white">
            <p className="text-xl md:text-2xl">웹 프론트엔드 개발 지원자</p>
            <p className="mb-5 text-3xl font-bold dark:text-amber-500 md:text-4xl">
              여인철(Yeo Incheol)
            </p>
            <p className="mb-5 hidden max-w-[27rem] text-lg md:inline md:max-w-[30rem] md:text-xl">
              안녕하세요! 반도체 장비 전장설계 5년차 엔지니어에서 웹 프론트엔드
              개발자로 새로운 커리어를 준비하고 있는 <br />
              <span className="font-bold dark:text-amber-500">여인철</span>
              이라고 합니다.
            </p>
          </p>
        </div>
        <div className="flex h-full items-end justify-center lg:pr-16 ">
          <div className="lg:w-[28rem absolute h-96 w-80 -translate-y-24 translate-x-4 animate-pulse border-8 border-amber-300/60 dark:border-amber-400/60 lg:h-[34rem] lg:w-[29rem] lg:translate-x-8 lg:border-[1.2rem]"></div>
          <div className="absolute h-96 w-80 -translate-y-12 animate-pulse border-4 border-slate-300/40 dark:border-amber-300/30 lg:h-[34rem] lg:w-[28rem] lg:border-[0.8rem]"></div>
          <img
            className=" z-40 h-[30rem] object-scale-down object-top lg:h-auto"
            src="/MyPhoto.png"
            alt="My Photo"
          />
        </div>
      </div>

      <div className="block overflow-hidden dark:bg-black">
        <h2
          className="font-FjallaOne truncate text-[2.7rem] font-bold  dark:text-amber-500 sm:text-[4.5rem] md:text-[5.2rem] lg:text-[9rem]"
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          YEO INCHEOL / LOGAN YEO
        </h2>
      </div>

      <section className="flex w-full flex-col items-center justify-center bg-slate-100">
        <p className="w-[17rem] pb-8 pt-12 text-center font-NanumMyeongjo text-3xl">
          저는 이런 기술들을 활용할 수 있습니다
        </p>
        <div className="mx-auto w-[70%]">
          <LogoSlider></LogoSlider>
        </div>
        <div className="mb-10 mt-12 text-center">
          <p className="mb-6">자세한 내용은 포트폴리오를 참고해주세요 😄</p>
          <button className="rounded-md bg-slate-800 p-2 px-10 text-white hover:bg-slate-600">
            <Link to="/portfolio">포트폴리오 보러가기</Link>
          </button>
        </div>
      </section>
      <section className="h-full w-full bg-slate-200">
        <p className="pt-16 text-center font-NanumMyeongjo text-4xl">
          저는 이런 경험들을 가지고 있습니다.
        </p>
      </section>
      <section className="h-full w-full bg-slate-300">
        <p className="pt-16 text-center font-NanumMyeongjo text-4xl">
          저는 이런 이유로 개발자가 되고 싶습니다.
        </p>
      </section>

      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/Javascript-logo.png"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">React</p>*/}
      {/*</div>*/}

      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/Typescript_logo.png"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">Typescript</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/react-logo.png"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">React</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/Redux-logo.png"}*/}
      {/*      alt="Redux Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">Redux</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/nextjs-logo.webp"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">Next.js</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/firbase-logo.jpeg"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">Firebase</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center">*/}
      {/*  <img*/}
      {/*      className="h-16 w-16 rounded-2xl"*/}
      {/*      src={"logo/tailwindCss.png"}*/}
      {/*      alt="React Logo"*/}
      {/*  />*/}
      {/*  <p className="text-sm">Tailwind</p>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className={classNames(*/}
      {/*    "fixed inset-0 z-40 h-full w-full bg-white dark:bg-black ",*/}
      {/*    isHidden ? "animate-fadeOut" : "",*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <div className="flex h-full w-full flex-col items-center justify-center gap-x-1 sm:flex-row ">*/}
      {/*    <p className="w-[20rem] text-right text-[13rem] font-bold dark:text-amber-500 sm:text-right">*/}
      {/*      '{age}*/}
      {/*    </p>*/}
      {/*    <div>*/}
      {/*      <p className="font-NanumMyeongjo text-2xl font-bold dark:text-white sm:text-3xl sm:font-bold md:text-5xl md:font-normal">*/}
      {/*        이렇게 살 수도*/}
      {/*        <br /> 이렇게 죽을 수도 없을 때<br /> 서른 살은 온다*/}
      {/*        <p*/}
      {/*          className={classNames(*/}
      {/*            "text-left font-NanumMyeongjo text-sm text-gray-400",*/}
      {/*          )}*/}
      {/*        >*/}
      {/*          최승자의 시 "삼십세" 중에서*/}
      {/*        </p>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}

export default AboutMePage;
