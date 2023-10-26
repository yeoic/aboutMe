import "./App.css";
import React, { useState } from "react";
import HomePage from "./component/page/HomePage";
import MenuModal from "./component/MenuModal";
import classNames from "classnames";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioPage from "./component/page/PortfolioPage";
import AboutMePage from "./component/page/AboutMePage";

export const stateContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isMenuModalClosing, setIsMenuModalClosing] = useState(false);

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
          setIsMenuModalClosing,
          menuModalHandler,
        }}
      >
        <div className={classNames(isDarkMode ? "dark" : "")}>
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
