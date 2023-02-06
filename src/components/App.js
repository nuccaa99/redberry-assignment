import React from "react";
import { useRoutes } from "react-router-dom";
import StartPage from "./StartPage";
import "./Style.css";
import GeneralInfo from "./GeneralInfo";



const App = () => {
    const element = useRoutes([
        { path: '/', element: <StartPage /> },
        { path: 'info', element: <GeneralInfo /> }
    ])
    return element;
}

export default App;