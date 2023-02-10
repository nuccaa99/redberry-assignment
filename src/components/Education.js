import React, { useState } from "react";
import "./Infos.css";
import arrowLeft from "./assets/arrowLeft.png";
import { Link } from "react-router-dom";
import valid from "./assets/valid.png";
import error from "./assets/error.png";

const Education = () => {
    const [uni, setUni] = useState("")
    const [degree, setDegree] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const [uniStyle, setUniStyle] = useState("")
    const [degreeStyle, setDegreeStyle] = useState("");
    const [endDateStyle, setEndDateStyle] = useState("");
    const [descriptionStyle, setDescriptionStyle] = useState("");

    const handleUniChange = (e) => {
        setUni(e.target.value);
        if (e.target.value.length >= 2) {
            setUniStyle("valid")
        } else {
            setUniStyle("error")
        }
    }

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
                    <div>
                        <input type="text" name="uni" id="uni-text" required
                            onChange={handleUniChange} className={uniStyle} />
                        {uniStyle === "valid" &&
                            <img src={valid} className="valid-icon-inside" alt="valid tick" />
                        }
                        {uniStyle === "error" &&
                            <img src={error} className="error-icon-inside" alt="error tick" />}
                    </div>
                    <p>მინიმუმ 2 სიმბოლო</p>
                </div>


                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label>ხარისხი </label>
                        <select required>
                            <option value="" selected>აირჩიეთ ხარისხი</option>
                            <option value="grapefruit">საშუალო სკოლის დიპლომი</option>
                            <option value="lime">ზოგადსაგანმანათლებლო დიპლომი</option>
                            <option value="coconut">ბაკალავრი</option>
                            <option value="mango">მაგისტრი</option>
                            <option value="mango">დოქტორი</option>
                            <option value="mango">ასოცირებული ხარისხი</option>
                            <option value="mango">სტუდენტი</option>
                            <option value="mango">კოლეჯი (ხარისხის გარეშე)</option>
                            <option value="mango">სხვა</option>
                        </select>
                    </div>

                    <div className="input-wrapper">
                        <label>დამთავრების რიცხვი </label>
                        <input type="date" name="ending-date" required />

                    </div>
                </div>

                <div className="input-wrapper desc">
                    <label id="desc-label">აღწერა </label>
                    <textarea type="text" name="desc" placeholder="განათლების აღწერა" id="edu-desc-text" required />
                </div>

            </form>
            <div className="more-exp wrapper">
                <button id="more-experience">სხვა სასწავლებლის დამატება</button>
            </div>
            <div className="toggle-buttons edu">
                <Link to="/experience">
                    <button type="sumbit" >ᲣᲙᲐᲜ</button>
                </Link>
                <Link to="/">
                    <button type="sumbit" >ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
                </Link>
            </div>
        </div>
    )
}

export default Education;