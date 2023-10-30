import React from "react";
import classNames from "classnames";
import { stateContext } from "../../App";

function AboutMeLanding({ props }) {
  const { isAnimating, isHidden, age } = React.useContext(stateContext);

  return (
    <section
      className={classNames(
        "fixed inset-0 z-30 h-full w-full bg-white dark:bg-black ",
        isAnimating ? "animate-fadeOut" : "",
        isHidden ? "hidden" : "",
      )}
    >
      <article className="flex h-full w-full flex-col items-center justify-center gap-x-1 sm:flex-row ">
        <b className="w-[20rem] text-right text-[13rem] font-bold dark:text-amber-500 sm:text-right">
          '{age}
        </b>
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
      </article>
    </section>
  );
}

export default AboutMeLanding;
