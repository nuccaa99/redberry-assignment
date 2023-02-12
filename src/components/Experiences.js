import React, { useState } from "react";
import "./Infos.css";
import CV from "./CV";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";
import Experience from "./Experience";


const Experiences = () => {


    const [title, setTitle] = useState("");
    const [emp, setEmp] = useState("");
    const [stDate, setStDate] = useState("");
    const [enDate, setEnDate] = useState("");
    const [desc, setDesc] = useState("");
    const [titleStyle, setTitleStyle] = useState("");
    const [empStyle, setEmpStyle] = useState("");
    const [stDateStyle, setStDateStyle] = useState("");
    const [enDateStyle, setEnDateStyle] = useState("");
    const [descStyle, setDescStyle] = useState("");


    const [exps, setExps] = useState([1]);


    const handleClick = () => {
        setExps(oldArray => [...oldArray, 1]);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length >= 2) {
            setTitleStyle("valid")
        } else {
            setTitleStyle("error")
        }
    }

    const handleEmpChange = (e) => {
        setEmp(e.target.value);
        if (e.target.value.length >= 2) {
            setEmpStyle("valid")
        } else {
            setEmpStyle("error")
        }
    }

    const handleStDateChange = (e) => {
        setStDate(e.target.value);
        setStDateStyle("valid")
    }

    const handleEnDateChange = (e) => {
        setEnDate(e.target.value);
        setEnDateStyle("valid")
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value);
        if (e.target.value.length > 0) {
            setDescStyle("valid")
        } else {
            setDescStyle("");
        }
    }

    return (
        <div className="page-container">
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
                        <Experience title={title} emp={emp} stDate={stDate}
                            enDate={enDate} desc={desc}
                            titleStyle={titleStyle} empStyle={empStyle}
                            stDateStyle={stDateStyle} enDateStyle={enDateStyle}
                            descStyle={descStyle}
                            handleTitleChange={handleTitleChange}
                            handleEmpChange={handleEmpChange}
                            handleStDateChange={handleStDateChange}
                            handleEnDateChange={handleEnDateChange}
                            handleDescChange={handleDescChange} />
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
            <CV title={title} emp={emp} stDate={stDate}
                enDate={enDate} desc={desc} />
        </div>
    )
}

export default Experiences;