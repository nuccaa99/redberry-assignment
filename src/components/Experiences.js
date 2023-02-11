import React, { useState } from "react";
import "./Infos.css";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";
import Experience from "./Experience";


const Experiences = () => {
    const [exps, setExps] = useState([1]);

    const handleClick = () => {
        setExps(oldArray => [...oldArray, 1]);
    }
    
    return (
        <div className="general-info container">
            <header className="general-info header">
                <Link to="/">
                    <img src={arrowLeft} alt="left arrow" id="arrow-left" />
                </Link>
                <div className="header-wrapper">
                    <h1 className="header-text">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
                    <p>2/3</p>
                </div>
            </header>
            {exps.map((item) => {
                return (
                    <Experience />
                )
            })}


            <div className="more-exp wrapper">
                <button id="more-experience" onClick={handleClick}>მეტი გამოცდილების დამატება</button>
            </div>
            <div className="toggle-buttons">
                <Link to="/info">
                    <button type="sumbit" >ᲣᲙᲐᲜ</button>
                </Link>
                <Link to="/education">
                    <button type="sumbit" >ᲨᲔᲛᲓᲔᲒᲘ</button>
                </Link>
            </div>

        </div>
    )
}

export default Experiences;