import React from "react";
function Menu(props){
    return <nav className="menu">
         <a href="#">
            <div id="logo">JP</div>
        </a>

        <ul id="ul-menu">
            <a href="#">
                <li className="li_menu">{props.lInks[0]}</li>
            </a>
            <a href="#about">
                <li className="li_menu">{props.lInks[1]}</li>
            </a>
            <a href="#techs">
                <li className="li_menu">{props.lInks[2]}</li>
            </a>
            <a href="#projects">
                <li className="li_menu">{props.lInks[3]}</li>
            </a>
            <a href="#contacts" id="contact">
                <li className="li_menu">{props.lInks[4]}</li>
            </a>
        </ul>

    </nav>
}
export default Menu