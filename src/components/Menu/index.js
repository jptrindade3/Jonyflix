import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Jonyflix_logo.png';
import './Menu.css';

// components
/* import ButtonLink from '../ButtonLink';
 Trocamos esse componente normal por um 
 styled componnent, o button logo a baixo */
import Button from "../Button"

function Menu(){
    return (
        <nav className="Menu"> 
            <Link to="/"> {/*Lembre que com o Link não se usa href, mas sim o to */}
                <img className="Logo" src={Logo} alt="Jonyflix"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;