import React from "react";
import './global.css'
import Menu from "./assets/menu";
import Home from "./assets/home"

function Portfolio(){
    return(
        <div>
            <Menu lInks={["Home","sobre","Tecnologias","Projetos","Contatos"]}></Menu>
            <Home></Home>
        </div>
    )
}

export default Portfolio;
