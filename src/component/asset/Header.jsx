import React from "react";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between">
      <div className="truncate bg-white p-4 text-2xl font-semibold text-black dark:bg-black dark:text-white">
        <Link to={"/"}>YEO's PF</Link>
      </div>
      <HeaderButton />
    </header>
  );
}

export default React.memo(Header);
