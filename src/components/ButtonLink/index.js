import React from 'react';
/*Esse componente serve só de exemplo inicial de como se criar
 um componente, mas não está sendo utilizado de verdade,
foi substituido por um styled-component chamado "Button"*/

function ButtonLink(props){
    return (
        <a href={props.href} className={props.className}> 
            {props.children}
        </a>
    );
}

export default ButtonLink;