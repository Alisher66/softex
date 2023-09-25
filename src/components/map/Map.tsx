import React from 'react';
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
type MapPropsType = {
    changeLocation: (lat:number, lng:number) => void
}
function Map({changeLocation}:MapPropsType) {
    const defaultProps = {
        center: {
            lat: 40.0964559,
            lng: 65.3745076
        },
        zoom: 14
    };
    const handleChange = (e: GoogleMapReact.ChangeEventValue) => {
        changeLocation(e.center.lat, e.center.lng)
    }
    return (
        <div className="map">
            <GoogleMapReact
                onChange={handleChange}
                bootstrapURLKeys={{key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker {...defaultProps.center} />
            </GoogleMapReact>
        </div>
    );
}

export default Map;