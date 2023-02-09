import React, { useState } from "react";
import "./Infos.css";

import valid from "./assets/valid.png";
import error from "./assets/error.png";


const Experience = () => {
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
        <div>
            
            <form>
                <div className="input-wrapper work">
                    <label id="title-label">თანამდებობა</label>
                    <div>
                        <input type="text" name="mail" id="title-text" onChange={handleTitleChange} className={titleStyle} required />
                        {titleStyle === "valid" &&
                            <img src={valid} className="valid-icon-inside" alt="valid tick" />
                        }
                        {titleStyle === "error" &&
                            <img src={error} className="error-icon-inside" alt="error tick" />}
                    </div>
                    <p>მინიმუმ 2 სიმბოლო</p>
                </div>
                <div className="input-wrapper work">
                    <label id="employee-label">დამსაქმებელი</label>
                    <div>
                        <input type="text" name="number" id="employee-text" onChange={handleEmpChange} className={empStyle} required />
                        {empStyle === "valid" &&
                            <img src={valid} className="valid-icon-inside" alt="valid tick" />
                        }
                        {empStyle === "error" &&
                            <img src={error} className="error-icon-inside" alt="error tick" />}
                    </div>
                    <p>მინიმუმ 2 სიმბოლო</p>
                </div>

                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label>დაწყების რიცხვი </label>
                        <input type="date" name="starting-date" onChange={handleStDateChange} className={stDateStyle} required />

                    </div>
                    <div className="input-wrapper">
                        <label>დამთავრების რიცხვი </label>
                        <input type="date" name="ending-date" onChange={handleEnDateChange} className={enDateStyle} required />

                    </div>
                </div>

                <div className="input-wrapper desc">
                    <label id="desc-label">აღწერა </label>
                    <textarea type="text" name="desc" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" id="desc-text"
                        onChange={handleDescChange} className={descStyle} />
                </div>

            </form>
        </div>
    )
}

export default Experience;