import React from "react";
import classNames from "classnames";
import { stateContext } from "../../App";
import { Link } from "react-router-dom";

function MenuModal(props) {
  const { isMenuModalOpen, isMenuModalClosing, menuModalHandler } =
    React.useContext(stateContext);
  const modalClass = classNames({
    "animate-slideDown": isMenuModalOpen && !isMenuModalClosing,
    "animate-slideUp": isMenuModalClosing,
  });

  const menuList = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Portfolio", href: "/portfolio" },
    {
      id: 3,
      title: "About Me",
      href: "/about-me",
    },
  ];

  return (
    <section
      className={classNames(
        "fixed z-50 flex h-full w-full justify-center bg-white dark:bg-black",
        modalClass,
      )}
    >
      <div className="basis-1/3">
        <ul className="flex flex-col gap-y-14 pt-[12rem]">
          {menuList.map((it) => (
            <li
              key={it.id}
              className="truncate font-NanumMyeongjo text-6xl font-thin dark:text-white  sm:text-8xl"
            >
              <button
                className="antialiased transition delay-150 hover:text-orange-600"
                // onClick={() => setIsMenuModalOpen(false)}
                onClick={menuModalHandler}
              >
                <Link to={it.href}>{it.title}</Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MenuModal;
