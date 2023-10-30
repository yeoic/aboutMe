import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LogoSlider from "../asset/LogoSlider";
import { Link } from "react-router-dom";
import AboutMeLanding from "./AboutMeLanding";
import { stateContext } from "../../App";
import JobCard from "../card/JobCard";

function AboutMePage(props) {
  const {
    setIsAnimating,
    setIsHidden,
    age,
    setAge,
    setScrollPosition,
    isHidden,
    scrollPosition,
  } = React.useContext(stateContext);

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
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsHidden(true);
      }, 1700);
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
    <main
      className={classNames(
        "relative h-screen",
        isHidden ? "" : "overflow-hidden",
      )}
    >
      <section className="flex h-full flex-col items-center justify-end dark:bg-black lg:flex-row">
        <article className="mt-14 flex h-full flex-grow items-center justify-center">
          <p className="animate-slideUpSm flex flex-col text-center font-NanumMyeongjo text-2xl dark:text-stone-300">
            <h2 className="text-xl md:text-2xl">
              신입 웹 프론트엔드 개발 지원자
            </h2>
            <h1 className="mb-5 text-3xl font-bold dark:text-amber-500 md:text-4xl">
              여인철(Yeo Incheol)
            </h1>
            <p className="mb-5 hidden max-w-[27rem] text-lg dark:text-stone-300 md:inline md:max-w-[30rem] md:text-xl">
              안녕하세요! 반도체 장비 전장설계 5년차 엔지니어에서 웹 프론트엔드
              개발자로 새로운 커리어를 준비하고 있는 <br />
              <b className="font-bold dark:text-amber-500">여인철</b>
              이라고 합니다.
            </p>
          </p>
        </article>
        <figure className="flex h-full items-end justify-center lg:pr-16 ">
          <div
            aria-hidden="true"
            className="lg:w-[28rem absolute h-96 w-80 -translate-y-24 translate-x-4 animate-pulse border-8 border-amber-300/60 dark:border-amber-400/60 lg:h-[34rem] lg:w-[29rem] lg:translate-x-8 lg:border-[1.2rem]"
          ></div>
          <div
            aria-hidden="true"
            className="absolute h-96 w-80 -translate-y-12 animate-pulse border-4 border-slate-300/40 dark:border-amber-300/30 lg:h-[34rem] lg:w-[28rem] lg:border-[0.8rem]"
          ></div>
          <img
            className=" z-10 h-[30rem] object-scale-down object-top lg:h-auto"
            src="/MyPhoto.png"
            alt="My Photo"
          />
        </figure>
      </section>

      <section className="block overflow-hidden dark:bg-black/95 ">
        <h2
          className="font-FjallaOne truncate text-[2.7rem] font-bold  dark:text-amber-500 sm:text-[4.5rem] md:text-[5.2rem] lg:text-[9rem]"
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          YEO INCHEOL / LOGAN YEO
        </h2>
      </section>

      <section className="flex w-full flex-col items-center justify-center bg-slate-100 dark:bg-black">
        <h1 className="w-[17rem] pb-8 pt-12 text-center font-NanumMyeongjo text-3xl font-bold dark:text-amber-500 md:w-full">
          저는 이런 기술들을 활용할 수 있습니다
        </h1>
        <div className="mx-auto w-[70%]">
          <LogoSlider></LogoSlider>
        </div>
        <div className="mb-10 mt-12 text-center dark:text-stone-300">
          <p className="mb-6">
            관련 내용은 포트폴리오와 노션에 정리해 두었습니다 😄
          </p>
          <button className="rounded-md bg-slate-800 p-2 px-10 text-white hover:bg-slate-600 dark:bg-amber-600 dark:hover:bg-amber-500">
            <Link to="/portfolio">포트폴리오 보러가기</Link>
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-slate-200 pb-20 dark:bg-black/95 dark:text-stone-300">
        <h1 className="0 w-[15rem] pt-10 text-center font-NanumMyeongjo text-3xl font-bold  dark:text-amber-500 md:w-full">
          저는 이런 경험을 가지고 있습니다
        </h1>

        <section className="0 mt-10 w-full">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <JobCard></JobCard>
            </div>
            <p className="w-[21.5rem] py-5 text-center md:w-[30rem]">
              다년간의 직장 경험을 통해 배운
              <p className="bg-amber-500/30 text-xl font-bold dark:text-amber-500">
                직장내 생활 태도, 동료와의 원만한 관계, 커뮤니케이션 스킬
              </p>
              이 있습니다. 이 부분에 검증된 사람이 필요하다면 저를 고려해주세요!
            </p>
          </div>
        </section>
      </section>
      <AboutMeLanding />
    </main>
  );
}

export default AboutMePage;
