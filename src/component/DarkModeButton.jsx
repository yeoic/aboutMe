import React from "react";
import { Bars3Icon, SunIcon } from "@heroicons/react/24/outline";
import { stateContext } from "../App";
import { MoonIcon, XMarkIcon } from "@heroicons/react/20/solid";

function DarkModeButton(props) {
  const { isDarkMode, setIsDarkMode, isMenuModalOpen, menuModalHandler } =
    React.useContext(stateContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex gap-x-12 bg-white p-4 pr-8 dark:bg-black">
      {isDarkMode ? (
        <button onClick={toggleDarkMode}>
          <MoonIcon className="h-6 dark:text-white" />
        </button>
      ) : (
        <button onClick={toggleDarkMode}>
          <SunIcon className="h-6 dark:text-white" />
        </button>
      )}

      <button onClick={menuModalHandler}>
        {isMenuModalOpen ? (
          <XMarkIcon className="h-6 dark:text-white" />
        ) : (
          <Bars3Icon className="h-6 dark:text-white" />
        )}
      </button>
    </div>
  );
}

export default DarkModeButton;
