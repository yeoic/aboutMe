import React from 'react';
import {SunIcon} from "@heroicons/react/24/outline";

function DarkModeIcon(props) {
    return (
        <button
            onClick={() => {
                setIsDarkMode(!isDarkMode)
            }}
        >
            <SunIcon className="h-6 dark:text-white"/>
        </button>
    );
}

export default DarkModeIcon;