import React from 'react';
import classNames from "classnames";
import {stateContext} from "../App";

function MenuModal(props) {

    const {isMenuModalOpen, setIsMenuModalOpen, isMenuModalClosing, setIsMenuModalClosing} = React.useContext(stateContext);
    const modalClass = classNames({
        'animate-slideDown' : isMenuModalOpen && !isMenuModalClosing,
        'animate-slideUp' : isMenuModalClosing
    })

    const menuList = [
        {id: 1,
        title: "Home"},
        {id: 2,
        title: "Portfolio"},
        {id: 3,
        title: "About Me"},
    ]

    return (
        <div className={classNames("absolute z-40 h-full w-full bg-white dark:bg-black shadow-2xl flex justify-center", modalClass)}>
            <div className="basis-1/3">
                <ul className="pt-[12rem] flex flex-col gap-y-14">
                    {
                        menuList.map((it) => (
                            <li key={it.id} className="text-6xl sm:text-8xl truncate font-NanumMyeongjo font-thin  dark:text-white">
                                <button className="antialiased transition delay-150 hover:text-orange-600">{it.title}</button></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default MenuModal;