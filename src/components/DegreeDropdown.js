import React from "react";
import "./DegreeDropdown.css";
import downArrow from "./assets/downarrow.png";

const DegreeDropdown = (props) => {
    console.log(props)
    const renderedOptions = props.degreeList.map((item) => {
        return (
            <div key={item.id} className="dropdown-menu-item" onClick={() => { props.handleChange(item.title) }}>
                {item.title}
            </div>
        )
    })

    return (
        <div>
            <div className={`dropdown-wrapper  ${props.class}`} onClick={props.handleOpening} >
                <div className="degree-input"> {props.degree}</div>
                <img src={downArrow} alt="dropdown arrow" />
            </div>
            <div className={`dropdown-menu ${!props.dropDown ? "" : "hidden"}`}>{renderedOptions}</div>
        </div>
    )
}

export default DegreeDropdown;