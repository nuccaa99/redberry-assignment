import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import StartPage from "./StartPage";
import "./Style.css";
import "./Infos.css";
import GeneralInfo from "./GeneralInfo";
import Experiences from "./Experiences";
import Education from "./Education";
import CV from "./CV";




const App = () => {


    const [data, setData] = useState({
        general: {
            "name": "", "lastname": "", "photo": "",
            "info": "", "mail": "", "phone": ""
        }, experience: [{
            "title": "", "emp": "", "stDate": "", "enDate": "", "desc": ""
        }],
        education: [{
            "uni": "", "degree": "", "endDate": "", "description": "",
            "dropDown": ""
        }]
    });

    const [storageData, setStorageData] = useState({
        data: {
            general: {
                "name": "", "lastname": "", "photo": "",
                "info": "", "mail": "", "phone": ""
            }, experience: [{
                "title": "", "emp": "", "stDate": "", "enDate": "", "desc": ""
            }],
            education: [{
                "uni": "", "degree": "", "endDate": "", "description": "",
                "dropDown": ""
            }]
        }
    });


    useEffect(() => {
        window.localStorage.setItem('data', JSON.stringify(data));
        if (window.localStorage.getItem('data')) {
            setStorageData({ data: JSON.parse(window.localStorage.getItem('data')) });
        }
    }, [data]);


    const element = useRoutes([
        { path: '/', element: <StartPage /> },
        { path: 'info', element: <div className="page-container"><GeneralInfo storageData={storageData.data.general} setData={setData} /> <CV data={storageData.data} /></div> },
        { path: 'experience', element: <div className="page-container"><Experiences storageData={storageData.data.experience} setData={setData} /> <CV data={storageData.data} /></div> },
        { path: 'education', element: <div className="page-container"><Education storageData={storageData.data.education} setData={setData} /><CV data={storageData.data} /></div> }
    ])
    return element;
}

export default App;