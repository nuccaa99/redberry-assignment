import React, { useState, useEffect } from "react";
import "./Infos.css";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";
import Experience from "./Experience";


const Experiences = (props) => {

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

    const [expInfo, setExpInfo] = useState({
        title: props.storageData[0].title, emp: props.storageData[0].emp,
        stDate: props.storageData[0].stDate, enDate: props.storageData[0].enDate, desc: props.storageData[0].desc
    });

    useEffect(() => {
        let updated = {};
        updated = { experience: [expInfo] };
        props.setData(data => ({
            ...data,
            ...updated
        }));
    }, [expInfo]);


    const handleTitleChange = (e) => {
        setTitle(e.target.value);

        let updatedValue = {};
        updatedValue = { title: e.target.value };
        setExpInfo(expInfo => ({
            ...expInfo,
            ...updatedValue
        }));

        if (e.target.value.length >= 2) {
            setTitleStyle("valid");
        } else {
            setTitleStyle("error")
        }


    }

    const handleEmpChange = (e) => {
        setEmp(e.target.value);

        let updatedValue = {};
        updatedValue = { emp: e.target.value };
        setExpInfo(expInfo => ({
            ...expInfo,
            ...updatedValue
        }));

        if (e.target.value.length >= 2) {
            setEmpStyle("valid")
        } else {
            setEmpStyle("error")
        }
    }

    const handleStDateChange = (e) => {
        setStDate(e.target.value);
        let updatedValue = {};
        updatedValue = { stDate: e.target.value };
        setExpInfo(expInfo => ({
            ...expInfo,
            ...updatedValue
        }));
        setStDateStyle("valid")
    }

    const handleEnDateChange = (e) => {
        setEnDate(e.target.value);
        let updatedValue = {};
        updatedValue = { enDate: e.target.value };
        setExpInfo(expInfo => ({
            ...expInfo,
            ...updatedValue
        }));
        setEnDateStyle("valid")
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value);
        let updatedValue = {};
        updatedValue = { desc: e.target.value };
        setExpInfo(expInfo => ({
            ...expInfo,
            ...updatedValue
        }));
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
                <Experience
                    data={expInfo}
                    title={title} emp={emp} stDate={stDate}
                    enDate={enDate} desc={desc}
                    titleStyle={titleStyle} empStyle={empStyle}
                    stDateStyle={stDateStyle} enDateStyle={enDateStyle}
                    descStyle={descStyle}
                    handleTitleChange={handleTitleChange}
                    handleEmpChange={handleEmpChange}
                    handleStDateChange={handleStDateChange}
                    handleEnDateChange={handleEnDateChange}
                    handleDescChange={handleDescChange}

                />


                <div className="more-exp wrapper">
                    <button id="more-experience">მეტი გამოცდილების დამატება</button>
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


        </div>
    )
}

export default Experiences;