import React from "react";
import "./Infos.css";


import valid from "./assets/valid.png";
import error from "./assets/error.png";


const Experience = ({
    data,
    title, emp, stDate, enDate, desc,
    titleStyle, empStyle,
    stDateStyle, enDateStyle,
    descStyle,
    handleTitleChange,
    handleEmpChange,
    handleStDateChange,
    handleEnDateChange,
    handleDescChange
}) => {

    return (
        <div>

            <form>
                <div className="input-wrapper work">
                    <label id="title-label">თანამდებობა</label>
                    <div>
                        <input type="text" name="title" id="title-text" onChange={handleTitleChange} className={titleStyle} required
                            value={data.title ? data.title : title} />
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
                        <input type="text" name="employee" id="employee-text" onChange={handleEmpChange} className={empStyle} required
                            value={data.emp ? data.emp : emp} />
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
                        <input type="date" name="starting-date" onChange={handleStDateChange} className={stDateStyle} required
                            value={data.stDate ? data.stDate : stDate} />

                    </div>
                    <div className="input-wrapper">
                        <label>დამთავრების რიცხვი </label>
                        <input type="date" name="ending-date" onChange={handleEnDateChange} className={enDateStyle} required
                            value={data.enDate ? data.enDate : enDate} />

                    </div>
                </div>

                <div className="input-wrapper desc">
                    <label id="desc-label">აღწერა </label>
                    <textarea type="text" name="desc" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" id="desc-text"
                        onChange={handleDescChange} className={descStyle} required
                        value={data.desc ? data.desc : desc} />
                </div>

            </form>
        </div>
    )
}

export default Experience;