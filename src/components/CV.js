import React, { useEffect, useState } from "react";
import "./CV.css";
import sparkle from "./assets/sparkly.png";
import at from "./assets/at.png";
import tele from "./assets/phone.png";

const CV = ({ data }) => {

    return (

        < div className="cv-container" >

            <div className="info-sector">

                <div className="name-container">
                    <span>{data.general.name}</span>
                    <span>{data.general.lastname}</span>
                </div>

                <img src={data.general.photo} alt="person" id="cv-image" />

                <div className="contact-container">
                    <div className="mail-wrap">
                        {data.general.mail !== "" &&
                            <img src={at} alt="mail logo" />
                        }
                        <span>{data.general.mail}</span>

                    </div>
                    <div className="phone-wrap">
                        {data.general.phone !== "" &&
                            <img src={tele} alt="mail logo" />
                        }
                        <span>{data.general.phone}</span>
                    </div>
                </div>
                <div className="info-wrap">
                    {data.general.info !== "" && <p className="info-header">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>}
                    <div className="info-container">{data.general.info}</div>
                </div>
            </div>
            {(data.experience[0].title !== "" || data.experience[0].emp !== "" || data.experience[0].desc !== "") &&
                <div className="exp-sector">
                    <p className="exp-header">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
                    <div className="job-title">
                        <span>{data.experience[0].title}, </span>
                        <span>{data.experience[0].emp}</span>
                    </div>

                    {data.experience[0].stDate !== "" &&
                        <div className="dates">
                            <span>{data.experience[0].stDate}</span>
                            <span> - {data.experience[0].enDate}</span>
                        </div>
                    }
                    <div className="exp-desc">
                        {data.experience[0].desc}
                    </div>


                </div>
            }



            {(data.education[0].uni !== "" || data.education[0].description !== "") &&
                <div className="edu-sector">
                    {data.education[0].uni !== "" && <p className="edu-header">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>}
                    {data.education[0].uni !== "" &&
                        <div className="uni-title">
                            <span>{data.education[0].uni}</span>
                            <span>, {data.education[0].degree}</span>
                        </div>
                    }
                    {data.education[0].endDate !== "" &&
                        <div className="dates">
                            <span>{data.education[0].endDate}</span>
                        </div>
                    }
                    <div className="edu-desc">
                        {data.education[0].description}
                    </div>


                </div>
            }

            <img src={sparkle} alt="red mark" id="red-star" />
        </div >

    )
}

export default CV;