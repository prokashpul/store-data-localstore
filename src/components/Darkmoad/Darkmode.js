import React from 'react';
import "./Darkmoad.css"
const Darkmode = () => {
const darkLight =()=>{
    console.log("yes")
}
    return (
        <div>
            <button className="darkmode" onClick={darkLight}>Light</button>
        </div>
    );
};

export default Darkmode;