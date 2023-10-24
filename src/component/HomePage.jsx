import classNames from "classnames";
import {Bars3Icon, SunIcon} from "@heroicons/react/24/outline";
import React, {useState} from "react";
import TypingText from "./TypingText";
import {MoonIcon} from "@heroicons/react/20/solid";

function HomePage(props) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={classNames(isDarkMode ? "dark" : isDarkMode)}>
            <div className={classNames('h-screen w-screen p-3 dark:bg-black')}>
                <header className="fixed inset-x-0 top-0 flex h-14 items-center justify-between dark:bg-black">
                    <div className="bg-white p-4 text-2xl font-semibold text-black dark:text-white dark:bg-black">
                        YEO's PF
                    </div>
                    <div className="flex gap-x-12 bg-white p-4 pr-8 dark:bg-black">

                        {isDarkMode ?
                            <button
                                onClick={() => {
                                    setIsDarkMode(!isDarkMode)
                                }}
                            >
                                <MoonIcon className="h-6 dark:text-white"/>
                        </button> :
                            <button
                                onClick={() => {
                                    setIsDarkMode(!isDarkMode)
                                }}
                            >

                                <SunIcon className="h-6 dark:text-white"/>
                        </button>}

                        <button>
                            <Bars3Icon className="h-6 dark:text-white"/>
                        </button>
                    </div>
                </header>
                <div className="flex h-full flex-col-reverse xl:flex-row">
                    <section className="flex basis-1/2 flex-col items-start justify-center px-10 sm:px-16 xl:mt-14 dark:text-white">
                        <p className="dark:text-orange-500 sm:text-2xl">I'm Yeo Incheol</p>

                        <TypingText initialText="i Develop Web Frontend" textStyle="font-Roboto text-2xl sm:text-4xl font-semibold subpixel-antialiased" typingTextSpeed={200} backspacingTextSpeed={10}/>

                        <p className="mr-7 mt-8 sm:mt-16">
                            바쁜 업무중 시간내어 방문해주셔서 감사합니다.
                            <br /> 웹 프론트엔드 개발자를 희망하는 여인철 입니다.
                        </p>
                        <p className="mt-5">잘부탁드리겠습니다 :)</p>
                        <div className=" sm:ml-1 mt-8 flex items-start justify-center gap-x-6">
                            <button className="border-2 border-black bg-black p-1 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out transition font-thin text-white dark:text-black dark:bg-white dark:border-white">
                                My Portfolio
                            </button>
                            <button className="border-2 border-black bg-white p-1  delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out transition font-thin text-black dark:bg-black dark:text-white dark:border-2 dark:border-white">
                                About Me
                            </button>
                        </div>
                    </section>
                    <div className="basis-1/2 bg-black bg-[url('/public/character_dark.png')] bg-cover bg-center bg-no-repeat"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;