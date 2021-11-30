import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Estudios Profesionales" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Academia Geeks-
                    <span>Octubre 2021 - Noviembre 2021</span>
                </H3Styled>
                <PStyled name="Construir lo que ven y utilizan los usuarios en los sitios, aplicaciones y otras soluciones web, usando las metodologías y herramientas que las empresas utilizando HTML-CSS, bootstrap, material design, Javascript entre otros."/>
            </div>
        </div>
    </div>
);

export default Education;