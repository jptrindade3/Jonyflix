import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled, {css} from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `};
`;

function PageDefault({children, paddingAll}) {
    return(
        <> {/* Fragment <> </>, não enche de div o seu navegador */}
            <Menu/>
                <Main paddingAll={paddingAll}>
                {children}
                </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;