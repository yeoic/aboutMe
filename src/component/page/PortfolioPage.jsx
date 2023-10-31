import React from "react";
import PortfolioCard from "../card/PortfolioCard";
import classNames from "classnames";
import { Link } from "react-router-dom";

function PortfolioPage(props) {
  const portfolio = [
    {
      id: 1,
      name: "자기소개 페이지",
      imgSrc: "bg-[url('/public/character_dark.png')]",
      portfolioSrc: "/",
      logoSrc: [
        "logo/Javascript-Logo.png",
        "logo/React-logo.png",
        "logo/Tailwind-Logo.png",
      ],
      logoName: ["Javascript", "React", "Tailwind"],
      content:
        "저에 대한 소개와 여지껏 작업한 포트폴리오를 보실 수 있도록 모아놓은 만든 웹 페이지 입니다 😊",
    },
    {
      id: 2,
      name: "도서관리 페이지",
      imgSrc: "bg-[url('/public/character_bright.png')]",
      portfolioSrc: "/",
      logoSrc: [
        "logo/Javascript-Logo.png",
        "logo/React-logo.png",
        "logo/Tailwind-Logo.png",
      ],
      logoName: ["Javascript", "React", "Tailwind"],
      content: "도서관 관리 페이지 입니다.",
    },
    {
      id: 3,
      name: "이따보실 서비스",
      imgSrc: "bg-[url('/public/RobotAndCharactor.png')]",
      portfolioSrc: "/",
      logoSrc: [
        "logo/Javascript-Logo.png",
        "logo/React-logo.png",
        "logo/Tailwind-Logo.png",
      ],
      logoName: ["Javascript", "React", "Tailwind"],
      content: "실시간 일회 만남 중개 서비스, 이따보실 입니다!",
    },
  ];

  return (
    <main className="h-screen dark:bg-black">
      <section className="mb-24 flex flex-grow flex-col px-12 lg:mx-48">
        <header className="flex h-52 items-end justify-start  ">
          <div className="w-[39rem] border-b border-black dark:border-white ">
            <h1 className="mb-8 font-NanumMyeongjo text-6xl dark:text-white">
              Portfolio
            </h1>
          </div>
        </header>
        <PortfolioCard portfolio={portfolio} />
      </section>
    </main>
  );
}

export default PortfolioPage;
