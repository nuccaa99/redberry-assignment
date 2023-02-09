import React from "react";
import "./Infos.css";
import arrowLeft from "./assets/arrowLeft.png";

const Education = () => {
    return (
        <div className="general-info container">
            <header className="general-info header">
                <img src={arrowLeft} alt="left arrow" id="arrow-left" />
                <div className="header-wrapper">
                    <h1 className="header-text">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
                    <p>3/3</p>
                </div>
            </header>
            <form>
                <div className="input-wrapper uni">
                    <label id="uni-label">სასწავლებელი</label>
                    <input type="text" name="uni" id="uni-text" />
                    <p>მინიმუმ 2 სიმბოლო</p>
                </div>


                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label>ხარისხი </label>
                        <input type="text" name="name" />

                    </div>

                    <div className="input-wrapper">
                        <label>დამთავრების რიცხვი </label>
                        <input type="date" name="ending-date" />

                    </div>
                </div>

                <div className="input-wrapper desc">
                    <label id="desc-label">აღწერა </label>
                    <input type="text" name="desc" placeholder="განათლების აღწერა" id="edu-desc-text" />
                </div>

            </form>
            <div className="more-exp wrapper">
                <button id="more-experience">სხვა სასწავლებლის დამატება</button>
            </div>
            <div className="toggle-buttons">
                <button type="sumbit" >ᲣᲙᲐᲜ</button>
                <button type="sumbit" >ᲨᲔᲛᲓᲔᲒᲘ</button>
            </div>
        </div>
    )
}

export default Education;