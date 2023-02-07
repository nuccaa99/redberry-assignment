import React from "react";
import "./Infos.css";
import arrowLeft from "./assets/arrowLeft.png";

const GeneralInfo = () => {
    return (
        <div className="general-info container">
            <header className="general-info header">
                <img src={arrowLeft} alt="left arrow" id="arrow-left" />
                <div className="header-wrapper">
                    <h1 className="header-text">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
                    <p>1/3</p>
                </div>
            </header>
            <form>
                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label>სახელი </label>
                        <input type="text" name="name" />
                        <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                    </div>
                    <div className="input-wrapper">
                        <label>გვარი </label>
                        <input type="text" name="lastname" />
                        <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                    </div>
                </div>
                <div className="pic-wrapper">
                    <label>პირადი ფოტოს ატვირთვა</label>
                    <button >ატვირთვა</button>
                </div>
                <div className="input-wrapper info">
                    <label id="info-label">ჩემ შესახებ (არასავალდებულო) </label>
                    <input type="text" name="info" placeholder="ზოგადი ინფო შენ შესახებ" id="info-text" />
                </div>
                <div className="input-wrapper contact">
                    <label id="mail-label">ელ.ფოსტა</label>
                    <input type="email" name="mail" id="mail-text" />
                    <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>
                <div className="input-wrapper contact">
                    <label id="phone-label">მობილურის ნომერი</label>
                    <input type="text" name="number" id="phone-text" />
                    <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                </div>
            </form>
            <button type="sumbit" className="page-toggle button">ᲨᲔᲛᲓᲔᲒᲘ</button>
        </div>
    )
}

export default GeneralInfo;