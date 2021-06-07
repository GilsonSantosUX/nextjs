import react from 'react'

// Import Nextjs
import Link from 'next/link';

// Styles
import styled from 'styled-components'
import GlobalStyle from '../style/GlobalStyle';
import { Display, Heading, Subdisplay, BodyHighlight, Detail } from '../style/Typography';

import Header from '../components/Header';
import Topbar from '../components/Navbar/Topbar';

const Main = styled.main`
    width:100%;
    height:100vh;
    

    background:var(--color-bg-1);
    box-sizing:border-box;

    margin:0;
    margin-top:4rem;
    padding:5rem 6rem;

    display:flex;
    flex-direction:column;
    gap:2.6rem;
    justify-content:flex-start;
    align-items:flex-start;
`;

function Home(){
    return (
        <>
        <Header/>
        <Topbar/>
        <Main>
            <Heading  primary white weight="700">👋 Oi, Eu sou Gilson Santos</Heading>
            <Detail color="--color-accent-3" weight="bold">Product Designer</Detail>
            <Display  primary white weight="900">Elevado nível de experiência em web design e conhecimento de desenvolvimento, produzindo trabalhos de qualidade.</Display>
            <Subdisplay white>I love Design and Programming ❤️</Subdisplay>
            {/* <button>Conhecer mais</button> */}
        </Main>
        <GlobalStyle theme="--theme-dark"/>
        </>
    )
}

export default Home;