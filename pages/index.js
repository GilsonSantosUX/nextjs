import styled from 'styled-components'

import GlobalStyle from './../style/GlobalStyle';
import { Display, Subdisplay, Link, BodyHighlight } from './../style/Typography';

const Main = styled.main`
    width:100%;
    height:100vh;
    padding:64px;
    background:var(--color-primary);
    box-sizing:border-box;
    margin:0;
    display:flex;
    flex-direction:column;
    gap:48px;
    justify-content:center;
    align-items:center;
`;

function Home(){
    return (
        <>
        <title>Gilson Santos UX</title>
        <Main>
            <Display center white>Hi, I'm Gilson Santos - Designer UX/UI 😎</Display>
            <Subdisplay white center>I love Design and Programming ❤️</Subdisplay>
            {/* <Link href="/about">About me</Link> */}
            <BodyHighlight color="var(--color-secondary)" align="center">Update in brief.</BodyHighlight>
        </Main>
        <GlobalStyle theme="--theme-dark"/>
        </>
    )
}

export default Home;