import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experiencie-container">
            <div className="Experience-item">
                <H3Styled>Fronted Developer -Genio Casa de Software</H3Styled>
                <PStyled name="Mi función es escribir y diseñar los componentes de front-end que cumplan con los requisitos de nuestras simulaciones y nuestras historias de usuario."/>
            </div>
        </div>
    </div>
);

export default Experience;