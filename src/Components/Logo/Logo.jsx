import React from 'react';
import Tilt from 'react-tilt';
import brain from "./Brain.jpg";
import "./logo.css"

const Logo = () => {
    return(
        <div>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100}} >
                <div className="Tilt-inner"><img src ={brain} alt = "logo"></img></div>
            </Tilt>
        </div>
    )
}

export default Logo