import React from 'react';
import DarkModeButton from "./DarkModeButton";

function Header(props) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between dark:bg-black">
            <div className="bg-white p-4 text-2xl font-semibold text-black dark:text-white dark:bg-black truncate">
                YEO's PF
            </div>
            <DarkModeButton/>

        </header>
    );
}

export default Header;