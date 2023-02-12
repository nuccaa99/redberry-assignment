import React from "react";
import "./CV.css";
import sparkle from "./assets/sparkly.png";
import at from "./assets/at.png";
import tele from "./assets/phone.png";

const CV = ({ name, lastname, image, mail, phone, info,
    title, emp, stDate, enDate, desc,
    uni, degree, endDate, description }) => {

    console.log({
        name, lastname, image, mail, phone, info,
        title, emp, stDate, enDate, desc,
        uni, degree, endDate, description
    })
    return (

        <div className="cv-container" >
            {name !== undefined &&
                <div className="info-sector">
                    <div className="name-container">
                        <span>{name}</span>
                        <span>{lastname}</span>
                    </div>
                    {image !== "undefined" &&
                        <img src={image} alt="person" id="cv-image" />
                    }
                    <div className="contact-container">
                        <div className="mail-wrap">
                            {mail !== "" &&
                                <img src={at} alt="mail logo" />
                            }
                            <span>{mail}</span>

                        </div>
                        <div className="phone-wrap">
                            {phone !== "" &&
                                <img src={tele} alt="mail logo" />
                            }
                            <span>{phone}</span>
                        </div>
                    </div>
                    <div className="info-wrap">
                        {info !== "" && <p className="info-header">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>}
                        <div className="info-container">{info}</div>
                    </div>

                    <img src={sparkle} alt="red mark" id="red-star" />
                </div>
            }
            {title !== undefined &&
                <div className="exp-sector">
                    {title !== "" && <p className="exp-header">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>}
                    {title !== "" &&
                        <div className="job-title">
                            <span>{title}</span>

                            <span>, {emp}</span>
                        </div>
                    }
                    {(stDate !== "" || enDate !== "") &&
                        <div className="dates">
                            <span>{stDate}</span>
                            <span> - {enDate}</span>
                        </div>
                    }

                    <div className="exp-desc">
                        {desc}
                    </div>



                </div>
            }
            {uni !== undefined &&

                <div className="edu-sector">
                    {uni !== "" && <p className="edu-header">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>}
                    {uni !== "" &&
                        <div className="uni-title">
                            <span>{uni}</span>
                            {degree !== "აირჩიეთ ხარისხი" &&
                                <span>, {degree}</span>
                            }
                        </div>
                    }
                    {endDate !== "" &&
                        <div className="dates">
                            <span>{endDate}</span>
                        </div>
                    }
                    <div className="edu-desc">
                        {description}
                    </div>


                </div>
            }
        </div >
    )
}

export default CV;