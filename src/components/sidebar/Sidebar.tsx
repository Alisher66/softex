import React from 'react';
import logo from "../../assets/image/logo.svg";
import NavMenu from "./NavMenu";
import BottomMenu from "./BottomMenu";


function Sidebar() {
    return (
        <div className="sidebar">
            <img className="logo" src={logo} alt="logo"/>
            <NavMenu />
            <BottomMenu />
        </div>
    );
}

export default Sidebar;