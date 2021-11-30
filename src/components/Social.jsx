import React from 'react';
//estilos para volverlo mas presentacional
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

const FreeCodeCamp = {
    color: "#3b5998"
  };
  const twitter = {
    color: "#38A1F3"
  }
  const linkedin = {
    color: "#0e76a8"
  }
  const github = {
    color: "#333"
  }
  

const fb = "facebook";
const Social = () => (
    <SocialStyle>
        <SocialUl>
            <SocialLi>
                <SocialAnchor href="hhttps://www.freecodecamp.org/espanol/juniorjesus" target="blanck">
                    <ThemeProvider theme={FreeCodeCamp}>
                        <SocialIcon className="fab fa-FreeCodeCamp" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://twitter.com/jrjesus18" target="blanck">
                    <ThemeProvider theme={twitter}>
                        <SocialIcon className="fab fa-twitter" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://www.linkedin.com/in/jrjesus18-81197615b/" target="blanck">
                    <ThemeProvider theme={linkedin}>
                        <SocialIcon className="fab fa-linkedin" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://github.com/juniorjesus" target="blanck">
                    <ThemeProvider theme={github}>
                        <SocialIcon className="fab fa-github" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
        </SocialUl>

    </SocialStyle>
);

export default Social;