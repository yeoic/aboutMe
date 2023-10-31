import React from "react";

function JobCard({ jobContent }) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      {jobContent.map((it) => (
        <article
          key={it.id}
          className="m-4 flex h-[30rem] flex-col items-center justify-center rounded-2xl border border-slate-500/70 bg-white shadow-md dark:border dark:border-amber-500/70 dark:bg-stone-900/90 md:w-[30rem]"
        >
          <img className="rounded-3xl p-14" src={it.logoSrc} alt={it.alt} />
          <h1 className="text-center text-2xl font-bold">{it.company}</h1>
          <p className="text-center text-[1rem]">{it.period}</p>
          <p className="pt-2 text-center text-[1rem]">{it.department}</p>
          <p className="p-6 text-center text-lg">{it.content}</p>
        </article>
      ))}
    </div>
  );
}

export default JobCard;
