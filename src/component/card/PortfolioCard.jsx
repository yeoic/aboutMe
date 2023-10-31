import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

function PortfolioCard({ portfolio }) {
  return (
    <section className="mt-10 grid flex-grow grid-flow-dense justify-stretch gap-y-2  sm:gap-x-2 lg:grid-cols-2 xl:grid-cols-3">
      {portfolio.map((it, idx) => (
        <article
          key={it.id}
          className={classNames(
            "relative flex h-96  items-center justify-center border bg-gray-300  bg-cover bg-center bg-no-repeat p-20 hover:bg-blue-300 dark:border-amber-500/80",
            it.imgSrc,
          )}
        >
          <div className="absolute inset-0 flex-wrap border-2 border-slate-500/60 bg-white p-5 opacity-0 transition-opacity hover:opacity-90 dark:border-2 dark:border-amber-600/60 dark:bg-black dark:text-white">
            <div>
              <h1 className="text-2xl font-bold dark:text-orange-500">
                Portfolio #{it.id}
              </h1>
              <h1 className="text-2xl">{it.name}</h1>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-3 opacity-100">
              {it.logoSrc.map((logo, idx) => (
                <figure
                  key={idx}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={logo}
                    alt={it.logoName[idx]}
                  />
                  <figcaption className="text-sm">
                    {it.logoName[idx]}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div>
              <div className="inline-flex w-full flex-col items-center justify-center gap-y-4">
                <p className="mt-5">{it.content}</p>
                <button className="animate-bounce rounded-md bg-black p-2 px-3 text-white dark:bg-amber-500">
                  <Link to={"/"}>보러가기</Link>
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default PortfolioCard;
