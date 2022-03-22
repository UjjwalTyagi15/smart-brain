import React from "react";
import './ImageLinkFrom.css';

const ImageLinkFrom = ({oninputchange,onbuttonsubmit}) => {
    return (
        <div className="form">
            <p className="f3 title">{'THIS MAGIC BRAIN WILL DETECT FACES IN YOUR IMAGES.GIVE IT A TRY'}</p>
            <div className="centre pt2">
                <div className=" pattern pa4 br3 shadow-5">
                <input className="  pa2 f4 w-70" type='text' placeholder="Your Image URL" onChange={oninputchange}></input>
                <button className="f4 pa2 ph3 pv2 dib grow white bg-light-purple wi-30" onClick={onbuttonsubmit}>DETECT</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkFrom;