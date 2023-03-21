import React from "react";
import { useState, useEffect } from "react";

export const StyleCategory = ({setAttribute}) => {
    const logo = require('./apina2.png');








    return(
        
        <div className="image-input-pair">
                <button ><img src={logo} className="image" alt="my image" onClick={setAttribute(", watercolor painting")} /></button>
                <button><img src={logo} className="image" alt="my image" onClick={setAttribute(", watercolor painting")} /></button>
                <button><img src={logo} className="image" alt="my image" onClick={setAttribute(", painting")} /></button>
        </div>
    );
}