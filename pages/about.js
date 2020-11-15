import { Display, Link } from '../src/style/Typography';
import GlobalStyle from '../src/style/GlobalStyle';

import Header from '../src/components/Header';

function About(){
    return (
        <>
            <Header title="About"/>
            <Display center >About</Display>
            <Link href="/">Back</Link>
            <GlobalStyle/>
        </>
    )
}

export default About;