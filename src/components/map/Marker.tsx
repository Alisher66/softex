import React from 'react';
import marker_img from "../../assets/image/location.png";

function Marker({lat, lng}: { lat: number, lng: number }) {
    return (
        <img src={marker_img} className="marker"></img>
    );
}

export default Marker;