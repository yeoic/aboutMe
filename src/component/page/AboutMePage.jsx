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
          <p className="animate-slideUpSm flex flex-col text-center font-NanumMyeongjo text-2xl dark:text-stone-300">
            <p className="text-xl md:text-2xl">
              신입 웹 프론트엔드 개발 지원자
            </p>
            <p className="mb-5 text-3xl font-bold dark:text-amber-500 md:text-4xl">
              여인철(Yeo Incheol)
            </p>
            <p className="mb-5 hidden max-w-[27rem] text-lg dark:text-stone-300 md:inline md:max-w-[30rem] md:text-xl">
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

      <div className="block overflow-hidden dark:bg-black/95 ">
        <h2
          className="font-FjallaOne truncate text-[2.7rem] font-bold  dark:text-amber-500 sm:text-[4.5rem] md:text-[5.2rem] lg:text-[9rem]"
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          YEO INCHEOL / LOGAN YEO
        </h2>
      </div>

      <section className="flex w-full flex-col items-center justify-center bg-slate-100 dark:bg-black">
        <p className="w-[17rem] pb-8 pt-12 text-center font-NanumMyeongjo text-3xl font-bold dark:text-amber-500 md:w-full">
          저는 이런 기술들을 활용할 수 있습니다
        </p>
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
        <p className="0 w-[15rem] pt-10 text-center font-NanumMyeongjo text-3xl font-bold  dark:text-amber-500 md:w-full">
          저는 이런 경험을 가지고 있습니다
        </p>

        <div className="0 mt-10 w-full">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="m-4 flex h-[30rem] w-[90%] flex-col items-center justify-center rounded-2xl border border-slate-500/70 bg-white shadow-md dark:border dark:border-amber-500/70 dark:bg-stone-900/90 md:w-[30rem]">
                <img
                  className="rounded-3xl p-14"
                  src="/logo/Jusung-Logo.png"
                  alt="React Logo"
                />
                <p className="text-center text-2xl font-bold">주성엔지니어링</p>
                <p className="text-center text-[1rem]">
                  (2017.09 - 2021.11 / 4년 1개월)
                </p>
                <p className="pt-2 text-center text-[1rem]">
                  제어개발팀 / 정규직
                </p>
                <p className="p-6 text-center text-lg">
                  전장설계 엔지니어로서 반도체 전공정 장비의 전기 시스템 설계,
                  프로젝트 관리, 협력사 관리, 장비 트러블슈팅, 신규 모니터링
                  시스템 개발 등의 업무를 진행했습니다.
                </p>
              </div>
              <div className="m-4 flex h-[30rem] w-[90%] flex-col items-center justify-center rounded-2xl border border-slate-500/70 bg-white shadow-md dark:border dark:border-amber-500/70 dark:bg-stone-900/90 md:w-[30rem]">
                <img
                  className="rounded-3xl p-14"
                  src="/logo/WoowaBrothers-Logo.png"
                  alt="React Logo"
                />
                <p className="text-center text-2xl font-bold">우아한형제들</p>
                <p className="text-center text-[1rem]">
                  (2021.11 - 2023.1 / 1년 2개월)
                </p>
                <p className="pt-2 text-center text-[1rem]">
                  서빙로봇사업실 기술운영팀 / 정규직
                </p>
                <p className="p-6 text-center text-lg">
                  로봇 필드 엔지니어 및 서비스 운영 업무를 진행했습니다. 서비스
                  정책 수립부터 로봇 제조사와의 기술 조율, 전국적인 서비스
                  운영의 CS 대응 총괄하는 업무를 담당하였습니다.
                </p>
              </div>
            </div>
            <p className="w-[21.5rem] py-5 text-center md:w-[30rem]">
              다년간의 직장 경험을 통해 배운
              <p className="bg-amber-500/30 text-xl font-bold dark:text-amber-500">
                직장내 생활 태도, 동료와의 원만한 관계, 커뮤니케이션 스킬
              </p>
              이 있습니다. 이 부분에 검증된 사람이 필요하다면 저를 고려해주세요!
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-4 text-center font-NanumMyeongjo text-3xl font-bold dark:text-amber-500">
              성과
            </p>
            <p className="text-center">
              저는 어디서든 최선을 다했고 이를 결과로 증명한 사람입니다.
            </p>
          </div>
        </div>
      </section>

      <div
        className={classNames(
          "fixed inset-0 z-40 h-full w-full bg-white dark:bg-black ",
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
