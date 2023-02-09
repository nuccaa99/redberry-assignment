import React from "react";
import { useRoutes } from "react-router-dom";
import StartPage from "./StartPage";
import "./Style.css";
import GeneralInfo from "./GeneralInfo";
import Experiences from "./Experiences";
import Education from "./Education";



const App = () => {
    const element = useRoutes([
        { path: '/', element: <StartPage /> },
        { path: 'info', element: <GeneralInfo /> },
        { path: 'experience', element: <Experiences /> },
        { path: 'education', element: <Education /> }
    ])
    return element;
}

export default App;