import react from 'react'

// Import Nextjs
import Link from 'next/link';

// Styles
import styled from 'styled-components'
import GlobalStyle from '../src/style/GlobalStyle';
import { Display, Subdisplay, BodyHighlight } from '../src/style/Typography';

import Header from '../src/components/Header';

const Main = styled.main`
    width:100%;
    height:100vh;
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
        <Header/>
        <Main>
            <Display center white>Hi, I'm Gilson Santos - Designer UX/UI 😎</Display>
            <Subdisplay white center>I love Design and Programming ❤️</Subdisplay>
            {/* <Link href="/about">About me</Link> */}
            <BodyHighlight color="var(--color-secondary)" align="center">Update in brief.</BodyHighlight>
        </Main>
        <GlobalStyle theme="--theme-dark"/>
        {/*Global site tag (gtag.js) - Google Analytics*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5YBNBNZ3N"></script>
        <script>
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'G-G5YBNBNZ3N')

            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}
                h._hjSettings={hjid:1944084,hjsv:6}
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
        </script>
        </>
    )
}

export default Home;