import React from "react";
import "./CV.css";
import sparkle from "./assets/sparkly.png";
import at from "./assets/at.png";
import tele from "./assets/phone.png";

const CV = ({ name, lastname, image, mail, phone, info }) => {
    return (

        <div className="cv-container" >
            <div className="info-sector">
                <div className="name-container">
                    <span>{name}</span>
                    <span>{lastname}</span>
                </div>
                {image != "undefined" &&
                    <img src={image} alt="person image" id="cv-image" />
                }
                <div className="contact-container">
                    <div className="mail-wrap">
                        {mail != "" &&
                            <img src={at} alt="mail logo" />
                        }
                        <span>{mail}</span>

                    </div>
                    <div className="phone-wrap">
                        {phone != "" &&
                            <img src={tele} alt="mail logo" />
                        }
                        <span>{phone}</span>
                    </div>
                </div>
                <div className="info-wrap">
                    {info != "" && <p className="info-header">ჩემ შესახებ</p>}
                    <div className="info-container">{info}</div>
                </div>

                <img src={sparkle} alt="red mark" id="red-star" />
            </div>
        </div >
    )
}

export default CV;