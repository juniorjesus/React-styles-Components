import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Certificates = () =>(
    <div className="Certificates">
        <H2Styled name="Certificaciones" />
        <div className="Certificates-container">
            <div className="Certificates-item">
                <H3Styled>FreeCodeCamp</H3Styled>
                <PStyled name="Es una comunidad sin fines de lucro que te ayuda a aprender a codificar mediante la construcción de proyectos.. "/>
            </div>
        </div>
    </div>
);

export default Certificates;