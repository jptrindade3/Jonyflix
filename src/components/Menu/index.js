import React from 'react';
import Logo from '../../assets/img/Jonyflix_logo.png'
import './Menu.css';

// components
/* import ButtonLink from '../ButtonLink';
 Trocamos esse componente normal por um 
 styled componnent, o button logo a baixo */
import Button from "../Button"

function Menu(){
    return (
        <nav className="Menu"> 
            <a href="/">
                <img className="Logo" src={Logo} alt="Jonyflix"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;