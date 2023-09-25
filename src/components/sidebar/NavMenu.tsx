import React from 'react';
import {Link} from "react-router-dom";
import icon1 from "../../assets/image/menu_item1.svg";
import icon2 from "../../assets/image/menu_item2.svg";
import btn_icon from "../../assets/image/btn_icon.svg";

function NavMenu() {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <Link to="/" className="menu__link menu_active">
                        <img src={btn_icon} className="button__icon"/>
                        Turar-joy majmualari
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/" className="menu__link">
                        <img src={icon1}/>
                        Jurnal
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/" className="menu__link">
                        <img src={icon2}/>
                        Quruvchilar
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;