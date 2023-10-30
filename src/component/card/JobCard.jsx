import React from "react";

function JobCard() {
  //   사진경로, 사진설명, 회사명, 재직기간, 소속팀, 직무설명

  const jobContent = [
    {
      id: 1,
      company: "주성엔지니어링",
      logoSrc: "/logo/Jusung-Logo.png",
      period: "(2017.09 - 2021.11 / 4년 1개월)",
      department: "제어개발팀 / 정규직",
      alt: "jusung Logo",
      content:
        "전장설계 엔지니어로서 반도체 전공정 장비의 전기 시스템 설계, 프로젝트관리, 협력사 관리, 장비 트러블슈팅, 신규 모니터링 시스템 개발 등의 업무를 진행했습니다.",
    },
    {
      id: 2,
      company: "우아한형제들",
      logoSrc: "/logo/WoowaBrothers-Logo.png",
      period: "(2021.11 - 2023.1 / 1년 2개월)",
      department: "서빙로봇사업실 기술운영팀 / 정규직",
      alt: "WoowaBrothers Logo",
      content:
        "로봇 필드 엔지니어 및 서비스 운영 업무를 진행했습니다. 서비스 정책 수립부터 로봇 제조사와의 기술 조율, 전국적인 서비스 운영의 CS 대응 총괄하는 업무를 담당하였습니다.",
    },
  ];

  return (
    <>
      {jobContent.map((it) => (
        <article className="m-4 flex h-[30rem] w-[90%] flex-col items-center justify-center rounded-2xl border border-slate-500/70 bg-white shadow-md dark:border dark:border-amber-500/70 dark:bg-stone-900/90 md:w-[30rem]">
          <img
            className="rounded-3xl p-14"
            src={it.logoSrc}
            alt="company Logo"
          />
          <h1 className="text-center text-2xl font-bold">{it.company}</h1>
          <p className="text-center text-[1rem]">{it.period}</p>
          <p className="pt-2 text-center text-[1rem]">{it.department}</p>
          <p className="p-6 text-center text-lg">{it.content}</p>
        </article>
      ))}
    </>
  );
}

export default JobCard;
