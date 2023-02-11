import React, { useState, useEffect } from "react";
import arrowLeft from "./assets/arrowLeft.png";
import axios from "axios";
import "./Infos.css";

import { Link } from "react-router-dom";
import valid from "./assets/valid.png";
import error from "./assets/error.png";

const Education = () => {
    const [uni, setUni] = useState("")
    const [degree, setDegree] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const [degrees, setDegrees] = useState([]);

    const [uniStyle, setUniStyle] = useState("")
    const [degreeStyle, setDegreeStyle] = useState("");
    const [endDateStyle, setEndDateStyle] = useState("");
    const [descriptionStyle, setDescriptionStyle] = useState("");


    const getData = async () => {
        const { data } = await axios.get(`https://resume.redberryinternship.ge/api/degrees`);
        setDegrees(data);
    };
    useEffect(() => {
        getData();
    }, []);


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
                        <select required defaultValue={'default'}>
                            <option value="default" disabled>აირჩიეთ ხარისხი</option>

                            {degrees.map((item) => {
                                return (
                                    <option value={item.title} key={item.id}>{item.title}</option>
                                )

                            })}

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