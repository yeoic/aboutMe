import "./App.css";
import React, { useState } from "react";
import HomePage from "./component/page/HomePage";
import MenuModal from "./component/asset/MenuModal";
import classNames from "classnames";
import Header from "./component/asset/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioPage from "./component/page/PortfolioPage";
import AboutMePage from "./component/page/AboutMePage";


export const stateContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isMenuModalClosing, setIsMenuModalClosing] = useState(false);

    // AboutMe Logic
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [age, setAge] = useState(0);

    const menuModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isMenuModalOpen) {
            setIsMenuModalClosing(true);
            setTimeout(() => {
                setIsMenuModalOpen(false);
                setIsMenuModalClosing(false);
            }, 1000);
        } else {
            setIsMenuModalOpen(true);
        }
    };

  return (
    <BrowserRouter>
      <stateContext.Provider
        value={{
          isDarkMode,
          setIsDarkMode,
          isMenuModalOpen,
          setIsMenuModalOpen,
          isMenuModalClosing,
          setIsMenuModalClosing, menuModalHandler,
        scrollPosition,
        setScrollPosition,
        isHidden,
        setIsHidden,
        isAnimating,
        setIsAnimating,
        age,
        setAge


        }}
      >
        <div className={classNames("dark:bg-black bg-white",isDarkMode ? "dark" : "")}>
          {isMenuModalOpen && <MenuModal />}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
          </Routes>
        </div>
      </stateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
