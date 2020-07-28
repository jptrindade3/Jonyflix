import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
/*Lembre que o carousel só funciona com as 
importações que fizemos no link no html principal */

const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next{
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        transform: initial;
        &:before{
            font-size: 30px;
        }
    }

    .slick-prev{
        left: 0;
    }

    .slick-next{
        right: 16px;
    }
`;

export const SliderItem = styled.li`
    margin-right: 16px;
    img{
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;

// Essa parte interfere no comportamento de carouserl, é ele de fato
const Slider = ({children}) => (
    <Container>
        <SlickSlider {...{
            dots: false,
            infinite: true, //Caso chegue no fim dos vídeos, faz com que ele repita a lista, para que não tenham espaços vazios
            speed: 300,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
        }}>
            {children}
        </SlickSlider>
    </Container>
);

export default Slider;