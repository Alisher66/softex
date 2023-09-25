import React from 'react';
import {Link} from "react-router-dom";
import icon3 from "../../assets/image/menu_item3.svg";
import icon4 from "../../assets/image/menu_item4.svg";

function BottomMenu() {
    return (
        <nav className="menu menu-bottom">
            <ul className="menu__list">
                <li className="menu__item menu-bottom_item">
                    <Link to="/" className="menu__link menu-bottom_link">
                        <img src={icon3}/>
                        Sozlamalar
                    </Link>
                </li>
                <li className="menu__item menu-bottom_item">
                    <Link to="/" className="menu__link menu-bottom_link">
                        <img src={icon4}/>
                        Chiqish
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default BottomMenu;