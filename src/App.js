import "./App.css";
import React, {useState} from "react";
import HomePage from "./component/HomePage";
import MenuModal from "./component/MenuModal";
import classNames from "classnames";
import Header from "./component/Header";

export const stateContext = React.createContext();

function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isMenuModalClosing, setIsMenuModalClosing] = useState(false)

    return (
        <stateContext.Provider value={{isDarkMode,
            setIsDarkMode,
            isMenuModalOpen,
            setIsMenuModalOpen,
            isMenuModalClosing,
            setIsMenuModalClosing}}>
            <div className={classNames(isDarkMode ? "dark" : "")}>
                {isMenuModalOpen && <MenuModal/>}
                <Header/>
                <HomePage/>
            </div>
        </stateContext.Provider>
    );
}

export default App;
