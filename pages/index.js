import styled from 'styled-components'

import GlobalStyle from './../style/GlobalStyle';

const Main = styled.main`
    width:100%;
    height:100vh;
    padding:64px;
    border:64px solid var(--color-white);
    background:var(--color-primary);
    box-sizing:border-box;
    margin:0;
    display:flex;
    flex-direction:column;
    gap:48px;
    justify-content:center;
    align-items:center;
`;

const Display = styled.h1`
    font-size:3rem;
    color:var(--color-white);
    line-height:3.75rem;
    text-align: ${props => props.center ? "center" : "left"};
    font-weight:500;
`;

const Subdisplay = styled.p`
    color: ${props => props.white ? "var(--color-white)" : "var(--color-black)"};
    font-weight:300;
    font-size:1.2rem;
    text-align: ${props => props.center ? "center" : "left"};
    background: ${props => props.bg};
`;

function Home(){
    return (
        <>
        <title>Gilson Santos UX</title>
        <Main>
            <Display center>Hi, I'm Gilson Santos - Designer UX/UI 😎</Display>
            <Subdisplay white center>I love Design and Programming ❤️</Subdisplay>
        </Main>
        <GlobalStyle/>
        </>
    )
}

export default Home;