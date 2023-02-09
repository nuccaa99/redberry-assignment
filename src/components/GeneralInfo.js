import React, { useState } from "react";
import "./Infos.css";
import arrowLeft from "./assets/arrowLeft.png";
import valid from "./assets/valid.png";
import error from "./assets/error.png";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [info, setInfo] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [mailStyle, setMailStyle] = useState("");
    const [phoneStyle, setPhoneStyle] = useState("")
    const [infoStyle, setInfoStyle] = useState("");
    const [nameStyle, setNameStyle] = useState("");
    const [lastNameStyle, setLastNameStyle] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
        const geo = /^[ა-ჰ]+$/;
        if (e.target.value.length >= 2 && geo.test(e.target.value)) {
            setNameStyle("valid")
        } else {
            setNameStyle("error")
        }
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        const geo = /^[ა-ჰ]+$/;
        if (e.target.value.length >= 2 && geo.test(e.target.value)) {
            setLastNameStyle("valid")
        } else {
            setLastNameStyle("error")
        }
    }

    const handleInfoChange = (e) => {
        setInfo(e.target.value);
        if (e.target.value.length > 0) {
            setInfoStyle("valid")
        } else {
            setInfoStyle("");
        }
    }

    const handleMailChange = (e) => {
        setMail(e.target.value);
        const ending = '@redberry.ge';
        if (e.target.value.endsWith(ending) && e.target.value.length > 12) {
            setMailStyle("valid");
        } else {
            setMailStyle("error");
        }
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        const starting = "+995";
        const numbers = /^[\d +]+$/
        if (e.target.value.substring(0, 4) === starting && e.target.value[4] === " "
            && e.target.value[8] === " " && e.target.value[11] === " "
            && e.target.value[14] === " " && e.target.value.length === 17
            && numbers.test(e.target.value)) {
            setPhoneStyle("valid")
        } else {
            setPhoneStyle("error")
        }

    }

    return (
        <div className="general-info container">
            <header className="general-info header">
                <Link to="/">
                    <img src={arrowLeft} alt="left arrow" id="arrow-left" />
                </Link>
                <div className="header-wrapper">
                    <h1 className="header-text">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
                    <p>1/3</p>
                </div>
            </header>
            <form>
                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label>სახელი </label>
                        <div>
                            <input type="text" name="name" onChange={handleNameChange} className={nameStyle} required />
                            {nameStyle === "valid" &&
                                <img src={valid} className="valid-icon" alt="valid tick" />
                            }
                            {nameStyle === "error" &&
                                <img src={error} className="error-icon" alt="error tick" />}
                        </div>
                        <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                    </div>
                    <div className="input-wrapper">
                        <label>გვარი </label>
                        <div>
                            <input type="text" name="lastname" onChange={handleLastNameChange} className={lastNameStyle} required />
                            {lastNameStyle === "valid" &&
                                <img src={valid} className="valid-icon" alt="valid tick" />
                            }
                            {lastNameStyle === "error" &&
                                <img src={error} className="error-icon" alt="error tick" />}
                        </div>
                        <p>მინიმუმ 2 ასო, ქართული ასოები</p>

                    </div>
                </div>
                <div className="pic-wrapper">
                    <label>პირადი ფოტოს ატვირთვა</label>
                    <button >ატვირთვა</button>
                </div>
                <div className="input-wrapper info">
                    <label id="info-label">ჩემ შესახებ (არასავალდებულო) </label>
                    <textarea type="text" name="info" placeholder="ზოგადი ინფო შენ შესახებ" id="info-text"
                        onChange={handleInfoChange} className={infoStyle} />
                </div>
                <div className="input-wrapper contact">
                    <label id={`mail-label${mailStyle}`} >ელ.ფოსტა</label>
                    <div>
                        <input type="email" name="mail" id="mail-text" required
                            onChange={handleMailChange} className={mailStyle} />
                        {mailStyle === "valid" &&
                            <img src={valid} className="valid-icon-outside" alt="valid tick" />}
                        {mailStyle === "error" &&
                            <img src={error} className="error-icon-outside" alt="error tick" />}
                    </div>
                    <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>
                <div className="input-wrapper contact">
                    <label id="phone-label">მობილურის ნომერი</label>
                    <div>
                        <input type="text" name="number" id="phone-text"
                            onChange={handlePhoneChange} className={phoneStyle} />
                        {phoneStyle === "valid" &&
                            <img src={valid} alt="valid tick" className="valid-icon-inside" />}
                        {phoneStyle === "error" &&
                            <img src={error} alt="error tick" className="error-icon-inside" />}
                    </div>
                    <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                </div>
            </form >
            <Link to="/experience">
                <button type="sumbit" id="next-page-btn">ᲨᲔᲛᲓᲔᲒᲘ</button>
            </Link>

        </div >
        
    )
}

export default GeneralInfo;