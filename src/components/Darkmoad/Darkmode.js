import React from 'react';
import { darkTheme } from '../../Utilities/dark';
import "./Darkmoad.css"
const Darkmode = () => {
const darkLight =()=>{
    darkTheme();
}
    return (
        <div>
            <button className="darkmode" onClick={darkLight}>Light</button>
        </div>
    );
};

export default Darkmode;