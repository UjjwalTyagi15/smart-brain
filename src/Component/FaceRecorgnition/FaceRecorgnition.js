import React from "react";
import './FaceRecorgnition.css'

const FaceRecorgnition= ({box ,imageURL} )=>{

    
   
    return (
        <div className="centre ma">
            <div className="absolute mt2">
                <img id="inputimage" width="400px" height='auto' src={imageURL} alt="" ></img>
        <div className="boundingbox" style={{top : box.topRow ,right :box.rightcol, bottom :box.bottomRow ,left: box.leftcol }}></div>
            </div>
        </div>
    )
}

export default FaceRecorgnition;