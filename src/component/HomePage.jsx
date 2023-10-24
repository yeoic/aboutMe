import classNames from "classnames";
import React from "react";
import TypingText from "./TypingText";
import {stateContext} from "../App";
import Header from "./Header";

function HomePage(props) {
    const {isDarkMode} = React.useContext(stateContext);

    return (<div>
            <div className={classNames('h-screen w-screen p-3 dark:bg-black')}>
                <div className="flex h-full flex-col-reverse xl:flex-row">
                    <section
                        className="flex basis-1/2 flex-col items-start justify-center px-10 sm:px-16 xl:mt-14 dark:text-white">
                        <p className="dark:text-orange-500 sm:text-2xl">I'm Yeo Incheol</p>

                        <TypingText initialText="I Develop Web Frontend"
                                    textStyle="z-0 font-Roboto text-3xl sm:text-4xl font-semibold subpixel-antialiased"
                                    typingTextSpeed={200} backspacingTextSpeed={10}/>

                        <p className="mr-7 mt-8 sm:mt-16">
                            바쁜 업무중 시간내어 방문해주셔서 감사합니다.
                            <br/> 웹 프론트엔드 개발자를 희망하는 여인철 입니다.
                        </p>
                        <p className="mt-5">잘부탁드리겠습니다 :)</p>
                        <div className=" sm:ml-1 mt-8 flex items-start justify-center gap-x-6">
                            <button
                                className="border-2 border-black bg-black p-1 px-2 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out transition font-thin text-white dark:text-black dark:bg-white dark:border-white">
                                My Portfolio
                            </button>
                            <button
                                className="border-2 border-black bg-white p-1 px-2  delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out transition font-thin text-black dark:bg-black dark:text-white dark:border-2 dark:border-white">
                                About Me
                            </button>
                        </div>
                    </section>
                    <div
                        className="basis-1/2 bg-black bg-[url('/public/character_dark.png')] bg-cover bg-center bg-no-repeat"></div>
                </div>
            </div>
        </div>);
}

export default HomePage;