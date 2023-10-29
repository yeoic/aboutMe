import React from "react";
import { Link } from "react-router-dom";

function PortfolioPage(props) {
  return (
    <section className="h-screen dark:bg-black">
      <div className="mb-24 flex flex-grow flex-col px-12 lg:mx-48">
        <div className="flex h-52 items-end justify-start  ">
          <div className="w-[39rem] border-b border-black dark:border-white ">
            <h1 className="mb-8 font-NanumMyeongjo text-6xl dark:text-white">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="mt-10 grid flex-grow grid-flow-dense justify-stretch gap-y-2  sm:gap-x-2 lg:grid-cols-2 xl:grid-cols-3">
          {/*포트폴리오 박스*/}
          <div className="relative h-96 items-center justify-center bg-[url('/public/character_dark.png')] bg-cover bg-center bg-no-repeat p-20 hover:bg-blue-300 dark:border-amber-500 ">
            <div className="absolute inset-0 border-2 border-slate-500/60 bg-white p-5 opacity-0 transition-opacity hover:opacity-90 dark:border-2 dark:border-amber-600/60 dark:bg-black dark:text-white">
              <div>
                <h1 className="inline-flex text-2xl font-bold dark:text-orange-500">
                  Portfolio #1
                  <button className="ml-2 animate-bounce rounded-md bg-amber-500 px-2 text-sm text-white    hover:bg-amber-500">
                    <Link to={"/"}>→ 보러가기</Link>
                  </button>
                </h1>
                <h1 className="text-2xl">자기소개 및 포트폴리오 페이지</h1>
              </div>
              <div className="mt-4 flex grid-cols-4 flex-wrap justify-center gap-x-2 gap-y-1 opacity-100">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/Javascript-logo.png"}
                    alt="Javascript Logo"
                  />
                  <p className="text-sm">JS(ES6+)</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/React-logo.png"}
                    alt="React Logo"
                  />
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/TailwindCSS-Logo.png"}
                    alt="tailwindCSS Logo"
                  />
                  <p className="text-center text-sm">TailWind</p>
                </div>
              </div>
              <div>
                <span className="inline-flex flex-col items-center justify-center gap-y-4">
                  <p className="mt-3">
                    저에 대한 소개와 여지껏 작업한 포트폴리오를 보실 수 있도록
                    모아놓은 만든 웹 페이지 입니다 😊
                  </p>
                </span>
              </div>
            </div>
          </div>
          {/*포트폴리오 박스*/}
          {/*포트폴리오 박스*/}
          <div className="relative flex h-96  items-center justify-center border bg-gray-300 bg-[url('/public/ab.png')] bg-cover bg-center bg-no-repeat p-20 hover:bg-blue-300 dark:border-amber-500/80 ">
            <div className="absolute inset-0 flex-wrap border-2 border-slate-500/60 bg-white p-5 opacity-0 transition-opacity hover:opacity-90 dark:border-2 dark:border-amber-600/60 dark:bg-black dark:text-white">
              <div>
                <h1 className="text-2xl font-bold dark:text-orange-500">
                  Portfolio #1
                </h1>
                <h1 className="text-2xl">자기소개 및 포트폴리오 페이지</h1>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-3 opacity-100">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16"
                    src={"logo/Javascript-logo.png"}
                    alt="Javascript Logo"
                  />
                  <p className="text-sm">JS(ES6+)</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/React-logo.png"}
                    alt="React Logo"
                  />
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/TailwindCSS-Logo.png"}
                    alt="tailwindCSS Logo"
                  />
                  <p className="text-center text-sm">TailWind</p>
                </div>
              </div>
              <div>
                <span className="inline-flex flex-col items-center justify-center gap-y-4">
                  <p className="mt-5">
                    저에 대한 소개와 여지껏 작업한 포트폴리오를 보실 수 있도록
                    모아놓은 만든 웹 페이지 입니다 😊
                  </p>
                  <button className="">
                    <Link to={"/"}>보러가기</Link>
                  </button>
                </span>
              </div>
            </div>
          </div>
          {/*포트폴리오 박스*/}
          {/*포트폴리오 박스*/}
          <div className="relative flex h-96 w-full items-center justify-center border bg-gray-300 bg-[url('/public/character_bright.png')] bg-cover bg-center bg-no-repeat p-20 hover:bg-blue-300 dark:border-amber-500/80 ">
            <div className="absolute inset-0 flex-wrap border-2 border-slate-500/60 bg-white p-5 opacity-0 transition-opacity hover:opacity-90 dark:border-2 dark:border-amber-600/60 dark:bg-black dark:text-white">
              <div>
                <h1 className="text-2xl font-bold dark:text-orange-500">
                  Portfolio #1
                </h1>
                <h1 className="text-2xl">자기소개 및 포트폴리오 페이지</h1>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-3 opacity-100">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16"
                    src={"logo/Javascript-logo.png"}
                    alt="Javascript Logo"
                  />
                  <p className="text-sm">JS(ES6+)</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/React-logo.png"}
                    alt="React Logo"
                  />
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-2xl"
                    src={"logo/TailwindCSS-Logo.png"}
                    alt="tailwindCSS Logo"
                  />
                  <p className="text-center text-sm">TailWind</p>
                </div>
              </div>
              <div>
                <span className="inline-flex flex-col items-center justify-center gap-y-4">
                  <p className="mt-5">
                    저에 대한 소개와 여지껏 작업한 포트폴리오를 보실 수 있도록
                    모아놓은 만든 웹 페이지 입니다 😊
                  </p>
                  <button className=""></button>
                </span>
              </div>
            </div>
          </div>
          {/*포트폴리오 박스*/}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
