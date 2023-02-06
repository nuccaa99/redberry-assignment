import React from "react";
import Logo from "./assets/logo.png";
import "./StartPage.css";
import Logo2 from "./assets/logo2.png";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="start-page container">
            <header className="start-page header">
                <img src={Logo} alt="logo" />
            </header>
            <div className="start-page content">
                <Link to="/info">
                    <button className="resume button">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
                </Link>
                <img src={Logo2} alt="logo2" />
            </div>
        </div>
    )
}

export default StartPage;