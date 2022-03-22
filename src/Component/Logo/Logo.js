import React from "react";
import Tilt from 'react-tilt'
import Brain from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ml4 mt2 logo" >

            <Tilt className="Tilt br4 pa3 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">  
                <img src={Brain} alt="LOGO"></img> 
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;