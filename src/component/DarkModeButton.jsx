import React from 'react';
import {Bars3Icon, SunIcon} from "@heroicons/react/24/outline";
import {stateContext} from "../App";
import {MoonIcon} from "@heroicons/react/20/solid";

function DarkModeButton(props) {
    const {isDarkMode, setIsDarkMode, isMenuModalOpen, setIsMenuModalOpen, isMenuModalClosing, setIsMenuModalClosing} = React.useContext(stateContext);

    return (
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

            <button
            onClick={() => {

               if(isMenuModalOpen) {
                    setIsMenuModalClosing(true);
                    setTimeout(() => {
                        setIsMenuModalOpen(false);
                        setIsMenuModalClosing(false);
                    },1000);
               } else {
                   setIsMenuModalOpen(true); }

            }}>
                <Bars3Icon className="h-6 dark:text-white"/>
            </button>
        </div>
    );
}

export default DarkModeButton;